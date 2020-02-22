exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
          {project_name: 'Laundry',
            description: 'si se puede',
          },
          {project_name: 'cook'},
          {project_name: 'exersice'},
          {project_name: 'make coustume',
            description: 'gymnastics'
        },
          {project_name: 'breakfast'},
          {project_name: 'read a book'}
      ]);
    });
};
