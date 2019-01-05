//acquire all the tools
const { ApolloServer, gql, PubSub } = require('apollo-server-express');
const http = require('http');
const fs = require('fs');
const PORT = 4000;
const cors = require('cors');
const express = require('express');
const routes = require('./routes.js');

//tools for database
const knex = require('./knex');
const knexLogger = require('knex-logger');
const faker = require('faker');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const User = require('./resolvers/User');
const Department = require('./resolvers/Department');
const Category = require('./resolvers/Category');
const Product = require('./resolvers/Product');
const Order = require('./resolvers/Order');
const jwt = require('jsonwebtoken');
const SECRET = process.env.HASH_SECRET;
const addUser = async req => {
  const token = req.headers.authorization;
  console.log('TOKEN', token);
  try {
    const user = await jwt.verify(token, SECRET);
  } catch (err) {
    console.log(err.message);
  }
  req.next();
};

//initiate express server
const app = express();
app.use(addUser);

app.use(express.static('public'));
app.use(cors());
app.use(knexLogger(knex));
app.use(require('body-parser').text());

//call routes that handles Stripe payment, twilio messages, and nodemailer email.
routes(app);

//initiate ApolloServer
const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}
`;
const pubSub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Department,
    Category,
    Product,
    Order
  },
  context: {
    knex,
    pubSub,
    SECRET
  }
});

server.applyMiddleware({
  app
});

//start server
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
