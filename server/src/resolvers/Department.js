const Department = {
  categories(parent, args, { knex }, info) {
    return knex('categories')
      .select('*')
      .where('department_id', `${parent.id}`);
  },
  products(parent, args, { knex }, info) {
    return knex('products')
      .select('*')
      .where('department_id', `${parent.id}`);
  }
};

module.exports = Department;
