require('dotenv').config();
const {
  ApolloServer,
  gql,
  PubSub
} = require('apollo-server-express');

const PORT = 4000;
const express = require('express');
const app = express();

const fs = require('fs');
const typeDefs = gql `
  ${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}
`;

const pubSub = new PubSub();
// const ENV = process.env.ENV || 'development';
// const knexConfig = require('../knexfile');
// const knex = require('knex')(knexConfig[ENV]);
const knex = require('./knex');
const knexLogger = require('knex-logger');
const cors = require("cors");
app.use(cors());
// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

const stripe = require("stripe")("sk_test_KXx4rnWNLRVPWRpE1qpFbNZ2");

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
  console.log("req.body",req.body);
  // console.log("Type", typeof(JSON.parse(req.body)))
  const {description,token,orderId,amount,customer} = JSON.parse(req.body);
  try {
    let {
      status
    } = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      description: description,
      source: token,
      // email:"dongyingname@yahoo.com",
      metadata: {'order_id': orderId,email:"dongyingname@yahoo.com",}
      // 
    });


    res.json({
      status
    });
  } catch (err) {
    switch (err.type) {
      case 'StripeCardError':
        console.log("A declined card error")
        // console.log("Your card's expiration year is invalid.")
        break;
      case 'RateLimitError':
      console.log("Too many requests made to the API too quickly")
        break;
      case 'StripeInvalidRequestError':
        console.log(" Invalid parameters were supplied to Stripe's API")
        break;
      case 'StripeAPIError':
        console.log("An error occurred internally with Stripe's API")
        break;
      case 'StripeConnectionError':
        console.log("Some kind of error occurred during the HTTPS communication")
        break;
      case 'StripeAuthenticationError':
        console.log('You probably used an incorrect API key')
        break;
      default:
        // Handle any other types of unexpected errors
        break;
    }
    // console.log(err);
    res.status(400).end();
  }
});



const faker = require('faker');
// const db = require('./db');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const User = require('./resolvers/User');
const Department = require('./resolvers/Department');
const Category = require('./resolvers/Category');
const Product = require('./resolvers/Product');

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

app.listen({
    port: PORT
  }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);