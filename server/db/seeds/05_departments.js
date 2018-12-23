exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('departments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('departments').insert([
        {
          name: 'produce',
          image:
            'https://www.smurfitkappa.com/-/media/images/smurfit-kappa-digital-marketing-platform/shared/product-and-market-sectors-610-x-350/fresh-produce.png'
        },
        {
          name: 'dairy and eggs',
          image:
            'https://static.wixstatic.com/media/07e702_4f1f366ac0d84498a8c2b9428fc1b664.png/v1/fill/w_352,h_247,al_c,q_80,usm_0.66_1.00_0.01/07e702_4f1f366ac0d84498a8c2b9428fc1b664.webp'
        },
        {
          name: 'meat & seafoood',
          image:
            'http://purepng.com/public/uploads/large/purepng.com-meatmeatanimalfleshchicken-1411527706404jvf7i.png'
        },
        {
          name: 'beverages',
          image: 'https://www.canadiansprings.com/img/img-coffee-tea.png'
        }
      ]);
    });
};
