require("dotenv").config();
const { ApolloServer, gql, PubSub } = require("apollo-server-express");

const PORT = 4000;
const express = require("express");
const app = express();
app.use(express.static("public"));

const fs = require("fs");
const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.graphql"), "utf8")}
`;

const pubSub = new PubSub();
// const ENV = process.env.ENV || 'development';
// const knexConfig = require('../knexfile');
// const knex = require('knex')(knexConfig[ENV]);
const knex = require("./knex");
const knexLogger = require("knex-logger");
const cors = require("cors");
app.use(cors());
// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

const stripe = require("stripe")("sk_test_KXx4rnWNLRVPWRpE1qpFbNZ2");

// const accountSid = process.env.DB_ACCOUNTSID;
// const authToken = process.env.DB_AUTHTOKEN
const accountSid = "AC44c296aef0acfd3c9d89eb43323cc1c1";
const authToken = "a4213c0a7d60fe51572089a36504fb34";
const client = require("twilio")(accountSid, authToken);

app.use(require("body-parser").text());
const bcrypt = require("bcrypt");

app.post("/charge", async (req, res) => {
  console.log("req.body", req.body);
  const { description, token, orderId, amount, customer } = JSON.parse(
    req.body
  );
  try {
    let { status } = await stripe.charges
      .create({
        amount: amount,
        currency: "usd",
        description: description,
        source: token,
        metadata: {
          order_id: orderId,
          email: "dongyingname@yahoo.com"
        }
        //
      })
      .then(
        client.messages
          .create({
            body: `New purchase has been made!Please prepare the grocery for the driver. Order # ${orderId}, Amount:$${amount}`,
            from: "+15878530743",
            to: "+1 403-903-9057"
          })
          .then(message => console.log("Message to the store", message.sid))
          .done()
      )
      .then(
        client.messages
          .create({
            body: `New purchase has been made! Please start to collect groceries!,Order # ${orderId}, Amount:$${amount}`,
            from: "+15878530743",
            to: "+1 780-708-4684"
          })
          .then(message => console.log("Message to the driver", message.sid))
          .done()
      );
    res.json({
      status
    });
  } catch (err) {
    switch (err.type) {
      case "StripeCardError":
        console.log("A declined card error");
        break;
      case "RateLimitError":
        console.log("Too many requests made to the API too quickly");
        break;
      case "StripeInvalidRequestError":
        console.log(" Invalid parameters were supplied to Stripe's API");
        break;
      case "StripeAPIError":
        console.log("An error occurred internally with Stripe's API");
        break;
      case "StripeConnectionError":
        console.log(
          "Some kind of error occurred during the HTTPS communication"
        );
        break;
      case "StripeAuthenticationError":
        console.log("You probably used an incorrect API key");
        break;
      default:
        console.log("Twillo Message Error");
        break;
    }
    res.status(400).end();
  }
});
app.post("/register", async (req, res) => {
  // console.log("req.body", req.body);
  const { email, password, username } = JSON.parse(req.body);
  console.log("email", email);
  console.log("password", password);
  console.log("username", username);

  const hashPass = bcrypt.hashSync(password, 15);
  console.log("hashed Password", hashPass);
  if (hashPass) {
    res.status(200).send("Status Code 200!! Registration succeeded!!!");

    //send the user data into database
  }
});

app.post("/distances", async (req, res) => {
  // console.log("req.body", req.body);
  const { walmart, superstore, saveonfood } = JSON.parse(req.body);
  console.log("walmart", walmart);
  console.log("superstore", superstore);
  console.log("saveonfood", saveonfood);
  var distance = require("google-distance-matrix");

  var origins = ["1812 8st SE, calgary,alberta,canada"];
  var destinations = [walmart, superstore, saveonfood];

  distance.key("AIzaSyD5tIgFoKnBfLJb5a0ao2CHcEYdYiQME_c");
  distance.units("imperial");

  distance.matrix(origins, destinations, function(err, distances) {
    if (err) {
      return console.log(err);
    }
    if (!distances) {
      return console.log("no distances");
    }
    if (distances.status == "OK") {
      for (var i = 0; i < origins.length; i++) {
        for (var j = 0; j < destinations.length; j++) {
          var origin = distances.origin_addresses[i];
          var destination = distances.destination_addresses[j];
          if (distances.rows[0].elements[j].status == "OK") {
            var distance = distances.rows[i].elements[j].distance.text;
            console.log(
              "Distance from " +
                origin +
                " to " +
                destination +
                " is " +
                distance
            );
          } else {
            console.log(
              destination + " is not reachable by land from " + origin
            );
          }
        }
      }
    }
  });
  // const hashPass = bcrypt.hashSync(password, 15);
  // console.log("hashed Password", hashPass);
  // if (hashPass) {
  //   res.status(200).send("Status Code 200!! Registration succeeded!!!");

  //   //send the user data into database
  // }
});

const faker = require("faker");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Subscription = require("./resolvers/Subscription");
const User = require("./resolvers/User");
const Department = require("./resolvers/Department");
const Category = require("./resolvers/Category");
const Product = require("./resolvers/Product");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Department,
    Category,
    Product
  },
  context: {
    knex,
    pubSub
  }
});
server.applyMiddleware({
  app
});

app.listen(
  {
    port: PORT
  },
  () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
