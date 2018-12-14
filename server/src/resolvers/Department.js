const Department = {
  categories(parent, args, { knex }, info) {
    // return knex('categories').where('department_id', parent.id);
    console.log(knex('categories').where('department_id', parent.id));
    return knex('categories').where('department_id', parent.id);
  },
  products(parent, args, { knex }, info) {
    return knex('products').where('department_id', parent.id);
  }
};

module.exports = Department;
