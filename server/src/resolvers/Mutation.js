const faker = require('faker');

const Mutation = {
  // addCartItem
  addCartItem(parent, args, { knex }, info) {
    const { quantity, user_id, product_id } = args.data;
    return knex('user_cart_items')
      .where({
        user_id: user_id,
        product_id: product_id
      })
      .then(result => {
        if (result.length) {
          return knex('user_cart_items')
            .returning('*')
            .where({ user_id, product_id })
            .increment({ quantity })
            .then(result => result[0]);
        } else {
          return knex('user_cart_items')
            .returning('*')
            .insert({
              quantity,
              user_id,
              product_id
            })
            .then(result => result[0]);
        }
      });
  },
  // deleteCartItem
  deleteCartItem(parent, args, { knex }, info) {
    const { user_id, product_id } = args.data;
    return knex('user_cart_items')
      .returning('*')
      .where({
        user_id,
        product_id
      })
      .del()
      .then(result => {
        if (!result[0]) {
          throw new Error('Item not found');
        } else {
          return result[0];
        }
      });
  }
};

module.exports = Mutation;
