
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {name: 'Fabric stores', description: "Cheap with nice pink colors"},
        {name: 'Michaels store', description: "They have glue, sparkles etc there"},
        {name: 'Scisors'},
        {name: 'Phone'}
      ]);
    });
};
