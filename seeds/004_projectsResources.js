exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects_Resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects_Resources').insert([
        {project_id: 1, resources_id: 1},
        {project_id: 1, resources_id: 2},
        {project_id: 1, resources_id: 3},
        {project_id: 1, resources_id: 4},
        {project_id: 2, resources_id: 2},
        {project_id: 2, resources_id: 4},
        {project_id: 3, resources_id: 2},
      ]);
    });
};
