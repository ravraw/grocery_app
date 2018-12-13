const faker = require('faker');

const Mutation = {
  // create user
  createUser(parent, args, { knex }, info) {
    const { email, password } = args.data;
    knex('users')
      .where('email', email)
      .then(result => {
        if (!result) {
          throw new Error('Email taken.');
        } else {
          knex('users')
            .returning(['id', 'email'])
            .insert({ email, password })
            .then(result => result);
        }
      })
      .catch(err => console.log(err.detail));
  }
};
module.exports = Mutation;
