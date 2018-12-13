const knex = require('../knex');

const Query = {
  users(parent, args, { db }, info) {
    // if (!args.query) {
    //   return db.users;
    // }
    // return db.users.filter(user => {
    //   return user.name.toLowerCase().includes(args.query.toLowerCase());
    // });
    return knex.select('*').from('users');
  },

  me() {
    return {
      id: '12',
      name: 'ravraw',
      email: 'r@r.com',
      age: 23
    };
  }
};

module.exports = Query;
