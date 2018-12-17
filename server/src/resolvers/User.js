const User = {
  shoppingCart(parent, args, { knex }, info) {
    console.log(parent);
    return knex('products')
      .join('user_cart_items', 'products.id', 'user_cart_items.product_id')
      .select('*')
      .where('user_cart_items.user_id', parent.id);
  }
};

module.exports = User;
