const faker = require('faker');

const Mutation = {
  // addCartItem
  addCartItem(parent, args, { knex, pubSub }, info) {
    const { quantity, user_id, product_id } = args.data;
    console.log('FROM ADD ITEM MUTATION:', quantity, user_id, product_id);
    return (
      knex('user_cart_items')
        .where({ user_id: user_id, product_id: product_id })
        .then(result => {
          if (result.length) {
            return knex('user_cart_items')
              .returning('*')
              .where({ user_id, product_id })
              .increment({ quantity });
          } else {
            return knex('user_cart_items')
              .returning('*')
              .insert({ quantity, user_id, product_id });
          }
        })
        //.then(result => result[0])
        .then(result => {
          knex('products')
            //.select('*')
            .returning('*')
            .join(
              'user_cart_items',
              'products.id',
              'user_cart_items.product_id'
            )
            //.join('users', 'user_cart_items.user_id', 'users.id')
            .where('user_cart_items.user_id', user_id)
            .then(cart => {
              //console.log('FROM PUBSUB', cart);
              pubSub.publish(`cartInfo ${user_id}`, {
                cartInfo: cart
              });
            });
          return result[0];
        })
    );
  },

  // deleteCartItem
  deleteCartItem(parent, args, { knex, pubSub }, info) {
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
          knex('products')
            //.select('*')
            .returning('*')
            .join(
              'user_cart_items',
              'products.id',
              'user_cart_items.product_id'
            )
            //.join('users', 'user_cart_items.user_id', 'users.id')
            .where('user_cart_items.user_id', user_id)
            .then(cart => {
              //console.log('FROM PUBSUB', cart);
              pubSub.publish(`cartInfo ${user_id}`, {
                cartInfo: cart
              });
            });

          return result[0];
        }
      });
  },
  //empty cart
  emptyCart(parent, args, { knex, pubSub }, info) {
    console.log('FROM MUTATION - EMPTY CART');
    const { user_id } = args;
    return knex('user_cart_items')
      .returning('*')
      .where({ user_id })
      .del()
      .then(result => {
        knex('products')
          //.select('*')
          .returning('*')
          .join('user_cart_items', 'products.id', 'user_cart_items.product_id')
          //.join('users', 'user_cart_items.user_id', 'users.id')
          .where('user_cart_items.user_id', user_id)
          .then(cart => {
            //console.log('FROM PUBSUB', cart);
            pubSub.publish(`cartInfo ${user_id}`, {
              cartInfo: cart
            });
          });
        console.log('FROM EMPTY CART', result);
        return result;
      });
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
