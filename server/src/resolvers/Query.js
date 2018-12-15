const Query = {
  // users
  users(parent, args, { knex }, info) {
    if (!args.query) {
      return knex.select('*').from('users');
    }
    return knex('users').where('email', 'like', `%${args.query}%`);
  },
  // stores
  stores(parent, args, { knex }, info) {
    if (!args.query) {
      return knex.select('*').from('stores');
    }
    return knex('stores').where('name', 'like', `%${args.query}%`);
  },
  // departments
  departments(parent, args, { knex }, info) {
    if (!args.query) {
      return knex.select('*').from('departments');
    }
    return knex('departments').where('name', 'like', `%${args.query}%`);
  },
  // categories
  categories(parent, args, { knex }, info) {
    if (!args.query) {
      return knex.select('*').from('categories');
    }
    return knex('categories').where('name', 'like', `%${args.query}%`);
  },
  // products
  products(parent, args, { knex }, info) {
    if (!args.query) {
      return knex.select('*').from('products');
    }
    return knex('products').where('name', 'like', `%${args.query}%`);
  }
};

module.exports = Query;
