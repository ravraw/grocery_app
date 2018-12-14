exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('departments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('departments').insert([
        { name: 'produce' },
        { name: 'dairy and eggs' },
        { name: 'meat & seafoood' },
        { name: 'breakfast' },
        { name: 'beverages' },
        { name: 'pantry' },
        { name: 'baker' },
        { name: 'snaks' },
        { name: 'frozen' },
        { name: 'deli' },
        { name: 'household' },
        { name: 'canned goods' },
        { name: 'dry goods and pasta' },
        { name: 'international' },
        { name: 'personal care' },
        { name: 'babies' },
        { name: 'pets' }
      ]);
    });
};
