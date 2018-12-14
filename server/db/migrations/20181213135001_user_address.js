exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_address', function(table) {
    table.increments('id');
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNull()
      .onDelete('cascade');
    table.string('house_number');
    table.string('building');
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
  return knex.schema.dropTable('user_address');
};
