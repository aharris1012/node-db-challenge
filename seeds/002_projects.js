exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {name: 'Help Tati with custome'},
        {name: 'Make lunch', description: "Salmon or tuna"},
        {name: 'Color with maleigha', description: "trolls book"},
      ]);
    });
};
