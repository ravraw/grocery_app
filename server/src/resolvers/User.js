const User = {
  shoppingCart(parent, args, { knex }, info) {
    console.log(parent);
    return (
      knex('products')
        // .select('*')
        .join('user_cart_items', 'products.id', 'user_cart_items.product_id')
        // .join('users', 'user_cart_items.user_id', parent.id)
        // .where('user_cart_items.user_id', parent.id);
        .select('*')
        .where('user_cart_items.user_id', parent.id)
    );
  }
};

module.exports = User;
