exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl.increments()
          tbl.string('projectName',128).notNullable
          tbl.boolean('completed').defaultTo(false)
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
  };