const Product = {
  department(parent, args, { knex }, info) {
    return knex('department').where('id', parent.department_id);
  },
  category(parent, args, { knex }, info) {
    return knex('categories').where('id', parent.category_id);
  }
};

module.exports = Product;
