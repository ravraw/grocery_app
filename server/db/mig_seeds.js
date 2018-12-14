// users
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id');
    table
      .string('email')
      .unique()
      .notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

// user_profile
