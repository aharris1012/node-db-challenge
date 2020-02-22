exports.up = function(knex) {
    return knex.schema
      .createTable('project_resources', tbl => {
          tbl.integer('project_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
          tbl.integer('resource_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('resources')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
          tbl.primary(['project_id', 'resource_id'])
      })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('project_resources');
    
  };