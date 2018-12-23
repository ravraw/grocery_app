exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_order_items', function(table) {
    table.increments('id');
    table
      .integer('product_id')
      .references('id')
      .inTable('products');
    table.integer('quantity');
    table.decimal('price');
    table
      .integer('order_id')
      .references('id')
      .inTable('user_orders');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_order_items');
};
