exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'user1@example.com',
          password: 'user1'
        },
        {
          email: 'user2@example.com',
          password: 'user2'
        }
      ]);
    });
};
