exports.up = function(knex, Promise) {
  return knex.schema

    .createTable('orders', function(table) {
      table.increments('id');
      table.integer('sub_total');
      table.integer('tax_total');
      table.integer('grand_total');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    .createTable('user_orders', function(table) {
      table.increments('id');
      table
        .integer('user_id')
        .references('id')
        .inTable('users');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_orders').dropTable('orders');
};
