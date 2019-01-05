const User = {
  // shoppingCart(parent, args, { knex }, info) {
  //   return (
  //     knex('products')
  //       .select('*')
  //       .join('user_cart_items', 'products.id', 'user_cart_items.product_id')
  //       // .join('users', 'user_cart_items.user_id', 'users.id')
  //       .where('user_cart_items.user_id', parent.id)
  //   );
  // }
};

module.exports = User;
