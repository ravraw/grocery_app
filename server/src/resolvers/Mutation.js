const faker = require('faker');

const Mutation = {
  // addCartItem
  addCartItem(parent, args, { knex }, info) {
    const { quantity, user_id, product_id } = args.data;
    console.log('FROM ADD ITEM MUTATION:', quantity, user_id, product_id);
    return knex('user_cart_items')
      .where({
        user_id: user_id,
        product_id: product_id
      })
      .then(result => {
        if (result.length) {
          return (
            knex('user_cart_items')
              .returning('*')
              .where({ user_id, product_id })
              // .where( 'id',id )
              .increment({ quantity })
              .then(result => result[0])
          );
        } else {
          if (
            knex('user_cart_items')
              .select('quantity')
              .where({
                user_id: user_id,
                product_id: product_id
              })
          ) {
            return knex('user_cart_items')
              .returning('*')
              .insert({ quantity, user_id, product_id })
              .then(result => result[0]);
          }
        }
      });
  },

  // deleteCartItem
  deleteCartItem(parent, args, { knex }, info) {
    const { user_id, product_id } = args.data;
    console.log('VARIABLES:', user_id, product_id);
    return knex('user_cart_items')
      .returning('*')
      .where({ user_id, product_id })
      .del()
      .then(result => {
        console.log('FROM DELETE', result[0]);
        if (!result[0]) {
          console.log('FROM DELETE', result[0]);
          //throw new Error('Item not found !!!!!!');
        } else {
          return result[0];
        }
      });
  },
  //empty cart
  emptyCart(parent, args, { knex }, info) {
    console.log('FROM MUTATION - EMPTY CART');
    const { user_id } = args;
    return knex('user_cart_items')
      .returning('*')
      .where({ user_id })
      .del()
      .then(result => result[0]);
  },
  // add new order
  addOrder(parent, args, { knex }, info) {
    console.log('FROM MUTATION - ADD ORDER');
    const { user_id } = args;
    return knex('user_orders')
      .returning('*')
      .insert({ user_id })
      .then(result => result[0]);
  },
  // add OrderItems
  addOrderItem(parent, args, { knex }, info) {
    console.log('FROM MUTATION - ADD ORDER ITEM');
    const { product_id, quantity, price, order_id } = args.data;
    return knex('user_order_items')
      .returning('*')
      .insert({ product_id, quantity, price, order_id })
      .then(result => result[0]);
  }
};

module.exports = Mutation;
