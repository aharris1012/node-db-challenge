exports.up = function(knex) {
    return knex.schema
    .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('resourceName',128).notNullable
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources')
  
};