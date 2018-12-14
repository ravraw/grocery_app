exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_address')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_address').insert([
        {
          user_id: 1,
          house_number: '100',
          building: '',
          street: 'test street',
          city: 'calgary',
          postal_code: 't2y3s3',
          state: 'alberta',
          country: 'canada'
        },
        {
          user_id: 1,
          house_number: '200',
          building: '',
          street: 'test street',
          city: 'calgary',
          postal_code: 't2y3s3',
          state: 'alberta',
          country: 'canada'
        }
      ]);
    });
};
