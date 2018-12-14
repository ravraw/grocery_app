exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('brands')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('brands').insert([
        { name: 'no name', company: 'rowValue1' },
        { name: "president's choice", company: 'superstore' },
        { name: 'great value', company: 'walmart' }
      ]);
    });
};
