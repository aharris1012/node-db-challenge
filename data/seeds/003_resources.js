exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'white clothes'},
        {resource_name: 'salmon and steak'},
        {resource_name: 'brussel sprouts'},
        {resource_name: 'sweet potatoe', description: '8oz'},
        {resource_name: 'asparagus', description: '10 of them'},
        {resource_name: 'library card'},
        {resource_name: 'couch'},
        {resource_name: 'bacon and eggs', description: 'go to store'},
        {resource_name: 'orange juice', description: 'fresh '}
      ]);
    });
};