require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server-express');

const PORT = 4000;
const express = require('express');
const app = express();

const fs = require('fs');
const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}
`;
// const ENV = process.env.ENV || 'development';
// const knexConfig = require('../knexfile');
// const knex = require('knex')(knexConfig[ENV]);
const knex = require('./knex');
const knexLogger = require('knex-logger');
// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

const faker = require('faker');
// const db = require('./db');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Department = require('./resolvers/Department');
const Category = require('./resolvers/Category');
const Product = require('./resolvers/Product');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    User,
    Department,
    Category,
    Product
  },
  context: { knex }
});
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
