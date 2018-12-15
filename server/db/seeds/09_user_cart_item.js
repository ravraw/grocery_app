exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_cart_items')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_cart_items').insert([
        { user_id: 1, product_id: 1 },
        { user_id: 1, product_id: 2 },
        { user_id: 1, product_id: 3 },
        { user_id: 2, product_id: 1 },
        { user_id: 2, product_id: 2 },
        { user_id: 2, product_id: 3 },
        { user_id: 2, product_id: 4 }
      ]);
    });
};
