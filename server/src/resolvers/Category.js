const Category = {
  department(parent, args, { knex }, info) {
    return knex('departments')
      .returning('*')
      .where('id', parent.department_id)
      .then(result => result[0]);
  },
  products(parent, args, { knex }, info) {
    return knex('products')
      .select('*')
      .where('category_id', `${parent.id}`);
  }
};

module.exports = Category;
