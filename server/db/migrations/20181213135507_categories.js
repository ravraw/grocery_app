exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(table) {
    table.increments('id');
    table.string('name');
    table
      .integer('department_id')
      .references('id')
      .inTable('departments');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
