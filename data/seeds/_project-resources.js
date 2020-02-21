exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {projectid: 1, resource_id: 7 },
        {projectid: 2, resource_id: 3},
        {projectid: 2, resource_id: 4},
        {projectid: 2, resource_id: 5},
        {projectid: 3, resource_id: 2},
        {projectid: 6, resource_id: 1},
        {projectid: 6, resource_id: 2},
      ]);
    });
};
