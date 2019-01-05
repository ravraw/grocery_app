const Order = {
  orderItems(parent, args, { knex }, info) {
    console.log('FROM RESOLVER - Order/ OrderItems');
    return knex('user_order_items')
      .select('*')
      .join('products', 'products.id', 'user_order_items.product_id')
      .where('order_id', `${parent.id}`);
  }
  // ,
  // products(parent, args, { knex }, info) {
  //   console.log('FROM RESOLVER - Order/ PRODUCTS');
  //   return knex('products')
  //     .select('*')
  //     .where('Order_id', `${parent.id}`);
  // }
};

module.exports = Order;
