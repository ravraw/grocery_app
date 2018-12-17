exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('products').insert([
        {
          name: 'banana',
          description: '',
          price: 0.2,
          department_id: 1, // produce
          category_id: 2, // fresh fruits
          brand_id: 1 // no name
        },
        {
          name: 'Orange',
          description: '',
          price: 0.38,
          department_id: 1, // produce
          category_id: 2, // fresh fruits
          brand_id: 1 // no name
        },
        {
          name: 'watermelon',
          description: '',
          price: 5.38,
          department_id: 1, // produce
          category_id: 2, // fresh fruits
          brand_id: 1 // no name
        },
        {
          name: 'white Onion',
          description: 'per kg',
          price: 0.39,
          department_id: 1, // produce
          category_id: 3, // fresh fruits
          brand_id: 1 // no name
        },
        {
          name: 'yellow onion',
          description: '3 lbs',
          price: 2.98,
          department_id: 1, // produce
          category_id: 3, // fresh vegetables
          brand_id: 1 // no name
        },
        {
          name: 'roma tomatos',
          description: '1 lbs',
          price: 2.98,
          department_id: 1, // produce
          category_id: 3, // fresh vegetable
          brand_id: 1 // no name
        },
        {
          name: 'roma tomatos',
          description: '1 lbs',
          price: 2.98,
          department_id: 2, // produce
          category_id: 5, // fresh vegetable
          brand_id: 1 // no name
        },
        {
          name: 'roma tomatos',
          description: '1 lbs',
          price: 2.98,
          department_id: 2, // produce
          category_id: 6, // fresh vegetable
          brand_id: 1 // no name
        },
        {
          name: 'roma tomatos',
          description: '1 lbs',
          price: 2.98,
          department_id: 2, // produce
          category_id: 7, // fresh vegetable
          brand_id: 1 // no name
        },
        {
          name: 'roma tomatos',
          description: '1 lbs',
          price: 2.98,
          department_id: 2, // produce
          category_id: 8, // fresh vegetable
          brand_id: 1 // no name
        }
      ]);
    });
};
