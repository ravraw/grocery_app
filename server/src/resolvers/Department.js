const Department = {
  categories(parent, args, { knex }, info) {
    console.log('FROM RESOLVER - DEPARTMENT/ CATEGORIES');
    return knex('categories')
      .select('*')
      .where('department_id', `${parent.id}`);
  },
  products(parent, args, { knex }, info) {
    console.log('FROM RESOLVER - DEPARTMENT/ PRODUCTS');
    return knex('products')
      .select('*')
      .where('department_id', `${parent.id}`);
  }
};

module.exports = Department;
