require("dotenv").config();
const { ApolloServer, gql, PubSub } = require("apollo-server-express");
const http = require("http");

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
const nodemailer = require("nodemailer");
const transport = {
  host: "smtp.gmail.com",
  auth: {
    user: "cross.aisle.app@gmail.com",
    pass: "1234567890Kk"
  }
};
const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log(
      "Server is ready to send messages from cross.aisle.app@gmail.com!"
    );
  }
});
app.post("/register", async (req, res) => {
  // console.log("req.body", req.body);
  // const { email, password, username } = JSON.parse(req.body);
  const { email } = JSON.parse(req.body);

  console.log("email", email);
  const line1 = `<h2>Welcome to Cross Aisle!</h2></br>`;
  const line2 = "<h2>Your registration is successful.</h2></br>";
  const line3 =
    "<h2>Now you can start ordering groceries from anywhere.</h2></br>";
  const line4 = "<h1><a href='http://localhost:3000'>Cross Aisle</a></h1>";
  const content = line1 + line2 + line3 + line4;
  const mail = {
    from: "cross.aisle.app@gmail.com",
    to: email, //Change to email address that you want to receive messages on
    subject: "Welcome to Cross Aisle!",
    html: content
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.status(400).send("Failed to send email!!");
    } else {
      res.status(200).send("Registration confirmation has been sent");
    }
  });
  if (email && password) {
    res.status(200).send("Status Code 200!! Registration succeeded!!!");

    //send the user data into database
  }
});

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

    console.log("status PLEASE", status);
    if (status === "succeeded") {
      const line1 = `<h2>Thank you for your purchase in Cross Aisle!</h2></br>`;
      const line2 = `<h2>Order ID: ${orderId}!</h2></br>`;
      const line3 = `<h2>The total: ${amount}.</h2></br>`;
      const line4 =
        "<h2>Go to <a href='http://localhost:3000'>Cross Aisle</a> to see your order history</h2>";
      const content = line1 + line2 + line3 + line4;
      const mail = {
        from: "cross.aisle.app@gmail.com",
        to: "dongyingname@yahoo.com", //Change to email address that you want to receive messages on
        subject: "Order confirmation from Cross Aisle!",
        html: content
      };
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.status(400).send("Failed to send email!!");
        } else {
          res.status(200).send("Purchase confirmation has been sent");
        }
      });
    }
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

const stores = {
  superstore: [
    "5858 Signal Hill Centre SW, Calgary, Alberta, Canada",
    "20 Heritage Meadows Way SE, Calgary, Alberta, Canada",
    "3575 20 Ave NE, Calgary, Alberta, Canada",
    "100 Country Village Rd NE, Calgary, Alberta, Canada",
    "4700 130 Ave SE, Calgary, Alberta, Canada"
  ],
  walmart: [
    "1212 37 St SW, Calgary, Alberta, Canada",
    "9650 Macleod Trail, Calgary, Alberta, Canada",
    "3800 Memorial Dr, Calgary, Alberta, Canada",
    "1110 57 Ave NE, Calgary, Alberta, Canada",
    "5005 Northland Dr NW, Calgary, Alberta, Canada",
    "4705 130 Ave SE, Calgary, Alberta, Canada"
  ]
};
var distance = require("google-distance-matrix");

app.post("/distances", async (req, res) => {
  // console.log("req.body", req.body);
  const { deliveryAddress, storeName } = JSON.parse(req.body);
  console.log("deliveryAddress", deliveryAddress);

  var origins = [deliveryAddress];
  var destinations = stores[storeName];

  // var destinations = [walmart, superstore, saveonfood];

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
      const distanceArr = [];
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
            distanceArr.push(
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
      res.status(200).send(distanceArr);
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

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(
  {
    port: PORT
  },
  () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${PORT}${
        server.subscriptionsPath
      }`
    );
  }
);
