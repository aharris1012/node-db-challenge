
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          projectid: 1,
          taskdescription: 'Make shake',
        },
        
        
        {
          projectid: 2, 
          taskdescription: 'Make lunch'
        
        },


        {
          projectid: 3, 
          taskdescription: 'Make dinner'}
      ]);
    });
};
