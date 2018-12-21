exports.up = function(knex, Promise) {
  return knex.schema.createTable('departments', function(table) {
    table.increments('id');
    table.string('name');
    table.string('image');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('departments');
};
