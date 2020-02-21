exports.up = function(knex) {
    return knex.schema
      .createTable('project-resources', tbl => {
          tbl.integer('projectid')
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
          tbl.primary(['projectid', 'resource_id'])
      })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('project-resources');
    
  };