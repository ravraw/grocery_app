const Query = {
  // users
  users(parent, args, { knex }, info) {
    console.log('users args:', args.id);
    if (!args.id) {
      return knex.select('*').from('users');
    }
    //return knex('users').where('id', `%${args.id}%`);
    return knex('users')
      .returning('*')
      .where({ id: `${args.id}` });
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
    const { query, id } = args;
    if (query) {
      return knex('departments').where('name', 'like', `%${query}%`);
    } else if (id) {
      return knex('departments').where({ id });
    } else {
      return knex.select('*').from('departments');
    }
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
    // if (!args.query) {
    //   return knex.select('*').from('products');
    // }
    // return knex('products').where('name', 'like', `%${args.query}%`);
    const { query, id } = args;
    if (query) {
      return knex('products').where('name', 'like', `%${query}%`);
    } else if (id) {
      return knex('products').where({ id });
    } else {
      return knex.select('*').from('products');
    }
  }
  //shoppingCart
  // userCartItems(parent, args, { knex }, info) {
  //   if (!args.query) {
  //     return knex.select('*').from('products');
  //   }
  //   return knex('products').where('name', 'like', `%${args.query}%`);
  // }
};

module.exports = Query;
