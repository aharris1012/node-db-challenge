exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('project_name',128).notNullable
        tbl.string('description', 500)
        tbl.boolean('completed').defaultTo(false)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
};