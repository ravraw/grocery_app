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
          brand_id: 1, // no name
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_48f29b47-546c-488a-ad89-2413b6b1b1fa.png'
        },
        {
          name: 'banana',
          description: '',
          price: 0.3,
          department_id: 1, // produce
          category_id: 2, // fresh fruits
          brand_id: 1, // no name
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_48f29b47-546c-488a-ad89-2413b6b1b1fa.png'
        },
        {
          name: 'Orange',
          description: '',
          price: 0.38,
          department_id: 1, // produce
          category_id: 2, // fresh fruits
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_28db571a-bbaa-4f50-8c58-3f1a6c4fafbb.png' // no name
        },
        {
          name: 'Orange',
          description: '',
          price: 0.5,
          department_id: 1, // produce
          category_id: 2, // fresh fruits
          brand_id: 1, // no name
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_28db571a-bbaa-4f50-8c58-3f1a6c4fafbb.png'
        },
        {
          name: 'watermelon',
          description: '',
          price: 5.38,
          department_id: 1, // produce
          category_id: 2, // fresh fruits
          brand_id: 1, // no name
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_abdc50a8-b9c9-40f8-94a9-d910cff72669.png'
        },
        {
          name: 'watermelon',
          description: '',
          price: 6,
          department_id: 1, // produce
          category_id: 2, // fresh fruits
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_abdc50a8-b9c9-40f8-94a9-d910cff72669.png' // no name
        },
        {
          name: 'white Onion',
          description: 'per kg',
          price: 0.39,
          department_id: 1, // produce
          category_id: 3, // fresh fruits
          brand_id: 1, // no name
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_99bd9e69-240a-4a71-844e-9c6773382bcc.png' // no name
        },
        {
          name: 'white Onion',
          description: 'per kg',
          price: 0.25,
          department_id: 1, // produce
          category_id: 3, // fresh fruits
          brand_id: 1, // no name
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_99bd9e69-240a-4a71-844e-9c6773382bcc.png' // no name
        },
        {
          name: 'yellow onion',
          description: '3 lbs',
          price: 2.98,
          department_id: 1, // produce
          category_id: 3, // fresh vegetables
          brand_id: 1, // no name
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_81615ebf-abb6-4fa4-aa62-f57e59c0b9c9.png'
        },
        {
          name: 'yellow onion',
          description: '3 lbs',
          price: 2.5,
          department_id: 1, // produce
          category_id: 3, // fresh vegetables
          brand_id: 1, // no name
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_81615ebf-abb6-4fa4-aa62-f57e59c0b9c9.png'
        },
        {
          name: 'roma tomatos',
          description: '1 lbs',
          price: 1.98,
          department_id: 1, // produce
          category_id: 3, // fresh vegetable
          brand_id: 1, // no name,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9bef11df-10a4-494f-b399-b6439c7f02fc.png'
        },
        {
          name: 'roma tomatos',
          description: '1 lbs',
          price: 2.4,
          department_id: 1, // produce
          category_id: 3, // fresh vegetable
          brand_id: 1, // no name
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9bef11df-10a4-494f-b399-b6439c7f02fc.png'
        },

        {
          name: 'red peppers',
          description: '1 lbs',
          price: 2.1,
          department_id: 2, // produce
          category_id: 6, // fresh vegetable
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e00e666b-574d-4a7a-a8bb-a907aff44c02.png' // no name
        },
        {
          name: 'red peppers',
          description: '1 lbs',
          price: 2.98,
          department_id: 2, // produce
          category_id: 7, // fresh vegetable
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e00e666b-574d-4a7a-a8bb-a907aff44c02.png' // no name
        },
        {
          name: 'avocado',
          description: '1 lbs',
          price: 3.9,
          department_id: 2, // produce
          category_id: 8, // fresh vegetable
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_47d68ae3-ce65-45d5-9bad-20cda9e67301.png' // no name
        },
        {
          name: 'avocado',
          description: '1 lbs',
          price: 2.98,
          department_id: 2, // produce
          category_id: 8, // fresh vegetable
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_47d68ae3-ce65-45d5-9bad-20cda9e67301.png' // no name
        }
      ]);
    });
};
