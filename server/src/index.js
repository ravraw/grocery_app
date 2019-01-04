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

app.use(require("body-parser").text());

const chargeCallback = require("./callbacks/chargeCallback.js");
app.post("/charge", async (req, res) => {
  chargeCallback(req, res);
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
