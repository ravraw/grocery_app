exports.up = function(knex, Promise) {
  return knex.schema.createTable('stores', function(table) {
    table.increments('id');
    table.string('name');
    table.string('building_number');
    table.string('street');
    table.string('city');
    table.string('postal_code');
    table.string('state');
    table.string('country');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stores');
};
