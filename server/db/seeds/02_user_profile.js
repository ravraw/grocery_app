exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_profile')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_profile').insert([
        {
          user_id: 1,
          name: 'ravindra rawat',
          phone_number: '1234567890'
        },
        {
          user_id: 2,
          name: 'ying dong',
          phone_number: '0987654321'
        }
      ]);
    });
};
