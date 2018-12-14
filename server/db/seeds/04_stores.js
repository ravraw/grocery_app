exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stores')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('stores').insert([
        {
          name: 'superstore',
          building_number: '1',
          street: 'store street',
          city: 'calgary',
          postal_code: 'T2Y 3R9',
          state: 'alberta',
          country: 'canada'
        },
        {
          name: 'walmart',
          building_number: '2',
          street: 'store street',
          city: 'calgary',
          postal_code: 'T2Y 3R9',
          state: 'alberta',
          country: 'canada'
        }
      ]);
    });
};
