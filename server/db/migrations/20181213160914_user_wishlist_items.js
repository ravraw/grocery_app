exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_wishlist_items', function(table) {
    table.increments('id');

    table
      .integer('user_id')
      .references('id')
      .inTable('users');
    table
      .integer('product_id')
      .references('id')
      .inTable('products');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_wishlist_items');
};
