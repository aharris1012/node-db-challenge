
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {description: 'Make Custome', notes: 'Fairy', project_id:1},
        {description: 'Buy fabric', notes: 'pink', project_id:1},
        {description: 'Make wings', notes: 'get the wire', project_id:3},
        {description: 'Sparkles', project_id:3}
      ]);
    });
};
