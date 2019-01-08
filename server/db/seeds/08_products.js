exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('products').insert([
        //produce --- packaged
        {
          name: 'Brown Mushrooms',
          description: '454 g',
          price: 3.8,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png'
        },
        {
          name: 'White Mushroom',
          description: '454 g',
          price: 3.8,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_79693737-5dd3-4de0-b001-95dd2a2027b4.png'
        },
        {
          name: 'Farmers Market Bicolor Corn',
          description: 'Each',
          price: 5.5,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6cab4cd3-d54d-48c2-91ac-403ec2a48926.png'
        },
        {
          name: 'Stringless Sugar Snap Peas',
          description: '32 oz',
          price: 10.95,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9834c5fb-e084-49ae-b303-c418aa0e1e82.png'
        },
        {
          name: 'Farmers Market Tomato Grape',
          description: '907 g',
          price: 7.65,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c0629c15-511b-485f-b08b-12832d28f29f.png'
        },
        {
          name: 'Green Giant Peas Sweetlet',
          description: '750g',
          price: 3.5,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f64e410d-e9d7-46bc-9b06-4cba907612ae.png'
        },
        {
          name: 'Jalapeno Peppers',
          description: '750g',
          price: 3.5,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_79693737-5dd3-4de0-b001-95dd2a2027b4.png'
        },
        {
          name: 'Baby Carrot Bag',
          description: '2lbs',
          price: 4.35,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ee4cc0ec-a01d-43ca-b9dc-b17027947b73.png'
        },
        {
          name: 'banana',
          description: '',
          price: 0.2,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_48f29b47-546c-488a-ad89-2413b6b1b1fa.png'
        },
        {
          name: 'banana',
          description: '',
          price: 0.3,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_48f29b47-546c-488a-ad89-2413b6b1b1fa.png'
        },
        {
          name: 'Orange',
          description: '',
          price: 0.38,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_28db571a-bbaa-4f50-8c58-3f1a6c4fafbb.png'
        },
        {
          name: 'Orange',
          description: '',
          price: 0.5,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_28db571a-bbaa-4f50-8c58-3f1a6c4fafbb.png'
        },
        {
          name: 'watermelon',
          description: '',
          price: 5.38,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_abdc50a8-b9c9-40f8-94a9-d910cff72669.png'
        },
        {
          name: 'watermelon',
          description: '',
          price: 6,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_abdc50a8-b9c9-40f8-94a9-d910cff72669.png'
        },
        {
          name: 'Pineapple',
          description: '',
          price: 3.8,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8376a834-936e-491c-8d32-f081af10d9bc.png'
        },
        {
          name: 'Pineapple',
          description: '',
          price: 4.8,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8376a834-936e-491c-8d32-f081af10d9bc.png'
        },
        {
          name: 'Red Seedless Grapes',
          description: '1 kg',
          price: 8.77,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d99809f0-695f-4bed-9cdc-6f9fe4c9f43e.png'
        },
        {
          name: 'Granny Smith Apple',
          description: 'each',
          price: 1.01,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1cdcd477-0b6b-4926-9f9c-13f6bfa96570.png'
        },
        {
          name: 'Canary Melon',
          description: 'each',
          price: 3.55,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_19f1cc5e-9898-4327-a032-c761f1b5470a.png'
        },
        {
          name: 'papaya',
          description: 'kg',
          price: 4.8,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cea4802a-e953-4bd1-8df6-306c98d2b44b.png'
        },
        {
          name: 'avocado',
          description: '1 lbs',
          price: 3.9,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_47d68ae3-ce65-45d5-9bad-20cda9e67301.png'
        },
        {
          name: 'avocado',
          description: '1 lbs',
          price: 2.98,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_47d68ae3-ce65-45d5-9bad-20cda9e67301.png'
        },
        {
          name: 'Ginger',
          description: 'each',
          price: 0.41,
          department_id: 1,
          category_id: 3,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cc00e7fe-a41b-475e-8379-571abf1ec66e.png'
        },
        {
          name: 'cilantro bunch',
          description: 'each',
          price: 1.35,
          department_id: 1,
          category_id: 3,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b7351820-bf4d-4df9-9ce0-0f4639094445.png'
        },
        {
          name: 'mint bunch',
          description: 'each',
          price: 2.15,
          department_id: 1,
          category_id: 3,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_98e08f75-8c23-41aa-92ed-1afe3863cd9d.png'
        },
        {
          name: 'fennel',
          description: 'each',
          price: 4.35,
          department_id: 1,
          category_id: 3,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cbfc37eb-a003-4752-a706-11c47136c061.png'
        },
        {
          name: 'Parsley bunch',
          description: 'each',
          price: 1.35,
          department_id: 1,
          category_id: 3,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c41835ce-b821-4f97-b9f5-b6e71f2f88ec.png'
        },
        {
          name: 'white Onion',
          description: 'per kg',
          price: 0.39,
          department_id: 1,
          category_id: 4,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_99bd9e69-240a-4a71-844e-9c6773382bcc.png'
        },
        {
          name: 'white Onion',
          description: 'per kg',
          price: 0.25,
          department_id: 1,
          category_id: 4,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_99bd9e69-240a-4a71-844e-9c6773382bcc.png'
        },
        {
          name: 'yellow onion',
          description: '3 lbs',
          price: 2.98,
          department_id: 1,
          category_id: 4,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_81615ebf-abb6-4fa4-aa62-f57e59c0b9c9.png'
        },
        {
          name: 'yellow onion',
          description: '3 lbs',
          price: 2.5,
          department_id: 1,
          category_id: 4,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_81615ebf-abb6-4fa4-aa62-f57e59c0b9c9.png'
        },
        {
          name: 'roma tomatos',
          description: '1 lbs',
          price: 1.98,
          department_id: 1,
          category_id: 4,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9bef11df-10a4-494f-b399-b6439c7f02fc.png'
        },
        {
          name: 'roma tomatos',
          description: '1 lbs',
          price: 2.4,
          department_id: 1,
          category_id: 4,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9bef11df-10a4-494f-b399-b6439c7f02fc.png'
        },
        {
          name: 'red peppers',
          description: '1 lbs',
          price: 2.1,
          department_id: 2,
          category_id: 4,
          brand_id: 1,
          store_id: 1,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e00e666b-574d-4a7a-a8bb-a907aff44c02.png'
        },
        {
          name: 'red peppers',
          description: '1 lbs',
          price: 2.98,
          department_id: 2,
          category_id: 4,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e00e666b-574d-4a7a-a8bb-a907aff44c02.png'
        },
        {
          name: 'Brown Mushrooms',
          description: '454 g',
          price: 4.1,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png'
        },
        {
          name: 'White Mushroom',
          description: '454 g',
          price: 3.9,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_79693737-5dd3-4de0-b001-95dd2a2027b4.png'
        },
        {
          name: 'Farmers Market Bicolor Corn',
          description: 'Each',
          price: 5.75,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6cab4cd3-d54d-48c2-91ac-403ec2a48926.png'
        },
        {
          name: 'Stringless Sugar Snap Peas',
          description: '32 oz',
          price: 11.15,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9834c5fb-e084-49ae-b303-c418aa0e1e82.png'
        },
        {
          name: 'Farmers Market Tomato Grape',
          description: '907 g',
          price: 7.95,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c0629c15-511b-485f-b08b-12832d28f29f.png'
        },
        {
          name: 'Green Giant Peas Sweetlet',
          description: '750g',
          price: 3.75,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f64e410d-e9d7-46bc-9b06-4cba907612ae.png'
        },
        {
          name: 'Jalapeno Peppers',
          description: '750g',
          price: 3.75,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_79693737-5dd3-4de0-b001-95dd2a2027b4.png'
        },
        {
          name: 'Baby Carrot Bag',
          description: '2lbs',
          price: 4.75,
          department_id: 1,
          category_id: 1,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ee4cc0ec-a01d-43ca-b9dc-b17027947b73.png'
        },
        {
          name: 'Red Seedless Grapes',
          description: '1 kg',
          price: 9.15,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d99809f0-695f-4bed-9cdc-6f9fe4c9f43e.png'
        },
        {
          name: 'Granny Smith Apple',
          description: 'each',
          price: 1.3,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1cdcd477-0b6b-4926-9f9c-13f6bfa96570.png'
        },
        {
          name: 'Canary Melon',
          description: 'each',
          price: 3.75,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_19f1cc5e-9898-4327-a032-c761f1b5470a.png'
        },
        {
          name: 'papaya',
          description: 'kg',
          price: 4.9,
          department_id: 1,
          category_id: 2,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cea4802a-e953-4bd1-8df6-306c98d2b44b.png'
        },
        {
          name: 'Ginger',
          description: 'each',
          price: 0.51,
          department_id: 1,
          category_id: 3,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cc00e7fe-a41b-475e-8379-571abf1ec66e.png'
        },
        {
          name: 'cilantro bunch',
          description: 'each',
          price: 1.55,
          department_id: 1,
          category_id: 3,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b7351820-bf4d-4df9-9ce0-0f4639094445.png'
        },
        {
          name: 'mint bunch',
          description: 'each',
          price: 2.75,
          department_id: 1,
          category_id: 3,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_98e08f75-8c23-41aa-92ed-1afe3863cd9d.png'
        },
        {
          name: 'fennel',
          description: 'each',
          price: 4.75,
          department_id: 1,
          category_id: 3,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cbfc37eb-a003-4752-a706-11c47136c061.png'
        },
        {
          name: 'Parsley bunch',
          description: 'each',
          price: 1.55,
          department_id: 1,
          category_id: 3,
          brand_id: 1,
          store_id: 2,
          image:
            'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c41835ce-b821-4f97-b9f5-b6e71f2f88ec.png'
        }
      ]);
    });
};
