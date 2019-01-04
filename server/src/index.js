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
const knex = require("./knex");
const knexLogger = require("knex-logger");
const cors = require("cors");
app.use(cors());
app.use(knexLogger(knex));

const stripe = require("stripe")("sk_test_KXx4rnWNLRVPWRpE1qpFbNZ2");

// const accountSid = process.env.DB_ACCOUNTSID;
// const authToken = process.env.DB_AUTHTOKEN
const accountSid = "AC44c296aef0acfd3c9d89eb43323cc1c1";
const authToken = "a4213c0a7d60fe51572089a36504fb34";
const client = require("twilio")(accountSid, authToken);

app.use(require("body-parser").text());

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
        to: "dongyingname@yahoo.com",
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

const registerCallback = require("./callbacks/registerCallback.js");
app.post("/register", async (req, res) => {
  registerCallback(req, res);
});

const distanceCallback = require("./callbacks/distanceCallback.js");
app.post("/distances", async (req, res) => {
  distanceCallback(req, res);
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
