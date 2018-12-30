exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('categories').insert([
        { name: 'packaged', department_id: '1' },
        { name: 'fresh fruits', department_id: '1' },
        { name: 'fresh herbs', department_id: '1' },
        { name: 'fresh vegetables', department_id: '1' },
        { name: 'milk', department_id: '2' },
        { name: 'packaged cheese', department_id: '2' },
        { name: 'yogurt', department_id: '2' },
        { name: 'cream & butter', department_id: '2' },
        { name: 'seafood', department_id: '3' },
        { name: 'meat', department_id: '3' },
        { name: 'poultry', department_id: '3' },
        { name: 'juice & Nectars', department_id: '4' },
        { name: 'coffee', department_id: '4' },
        { name: 'tea', department_id: '4' },
        { name: 'energy drinks', department_id: '4' }
      ]);
    });
};
