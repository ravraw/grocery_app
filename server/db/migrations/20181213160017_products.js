exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('brands', function(table) {
      table.increments('id');
      table.string('name');
      table.string('company');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('products', function(table) {
      table.increments('id');
      table.string('name');
      table.string('description');
      table.decimal('price');
      table.string('image');
      table
        .integer('brand_id')
        .references('id')
        .inTable('brands');
      table
        .integer('store_id')
        .references('id')
        .inTable('stores');
      table
        .integer('department_id')
        .references('id')
        .inTable('departments');
      table
        .integer('category_id')
        .references('id')
        .inTable('categories');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products').dropTable('brands');
};
