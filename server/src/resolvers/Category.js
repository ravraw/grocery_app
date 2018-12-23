const Category = {
  department(parent, args, { knex }, info) {
    console.log('FROM RESOLVER - CATEGORY/ DEPARTMENT');
    return knex('departments')
      .returning('*')
      .where('id', parent.department_id)
      .then(result => result[0]);
  },
  products(parent, args, { knex }, info) {
    console.log('FROM RESOLVER - CATEGORY/ PRODUCTS');
    return (
      knex('products')
        .select('*')
        //.where('category_id', `${parent.id}`);
        .where({ category_id: `${parent.id}`, store_id: 1 })
    );
  }
};

module.exports = Category;
