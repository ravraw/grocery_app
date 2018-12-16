const Category = {
  department(parent, args, { knex }, info) {
    console.log(parent);
    return knex('departments')
      .returning('*')
      .where('id', parent.department_id)
      .then(result => result[0]);
  },
  products(parent, args, { knex }, info) {
    return knex('products').where('category_id', `${parent.id}`);
  }
};

module.exports = Category;
