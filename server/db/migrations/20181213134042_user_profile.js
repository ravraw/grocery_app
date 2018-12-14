exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_profile', function(table) {
    table.increments('id');
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNull()
      .onDelete('cascade');
    table.string('name');
    table.string('password');
    table.string('email');
    table.string('phone_number');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_profile');
};
