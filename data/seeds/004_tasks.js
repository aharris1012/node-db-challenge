exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          task_description: 'Help tati with ourfit',
          notes: 'look on pinterest',
        },
        {
          project_id:2,
          task_description: 'wings',
          notes: 'what fabric',
        },
        {
          project_id:5,
          task_description: 'Dress or skirt',
        }
      ]);
    });
};