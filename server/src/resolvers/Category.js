const Category = {
  depart(parent, args, { knex }, info) {
    return knex('departments').where('id', `${parent.department_id}`);
  },
  products(parent, args, { knex }, info) {
    return knex('products').where('category_id', `${parent.id}`);
  }
};

module.exports = Category;
