// const COUNT = 'COUNT';
// const CARTINFO = 'CARTINFO';

const Subscription = {
  count: {
    subscribe: (parent, args, { pubSub }, info) => {
      let count = 0;
      setInterval(() => {
        count++;
        pubSub.publish(COUNT, {
          count
        });
      }, 1000);
      return pubSub.asyncIterator([COUNT]);
    }
  },
  cartInfo: {
    subscribe: (parent, { userId }, { pubSub, knex }, info) => {
      // const cart = knex('products')
      //   .select('*')
      //   .join('user_cart_items', 'products.id', 'user_cart_items.product_id')
      //   //.join('users', 'user_cart_items.user_id', 'users.id')
      //   .where('user_cart_items.user_id', userId);
      return pubSub.asyncIterator(`cartInfo ${userId}`);
    }
  }
};

module.exports = Subscription;
