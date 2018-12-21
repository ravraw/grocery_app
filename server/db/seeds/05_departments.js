exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('departments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('departments').insert([
        { name: 'produce', image: '' },
        { name: 'dairy and eggs', image: '' },
        { name: 'meat & seafoood', image: '' },
        { name: 'beverages', image: '' },
        { name: 'deli', image: '' }
      ]);
    });
};
