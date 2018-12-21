const Product = {
  department(parent, args, { knex }, info) {
    // return knex('departments').where('id', `${parent.department_id}`);
    //console.log(parent);
    return knex('departments')
      .returning('*')
      .where('id', parent.department_id)
      .then(result => result[0]);
  },
  category(parent, args, { knex }, info) {
    return knex('categories')
      .returning('*')
      .where('id', `${parent.category_id}`)
      .then(result => result[0]);
  },
  store(parent, args, { knex }, info) {
    return knex('stores')
      .returning('*')
      .where('id', `${parent.store_id}`)
      .then(result => result[0]);
  }
};

module.exports = Product;
