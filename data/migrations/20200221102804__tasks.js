exports.up = function(knex) {
    return knex.schema
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('taskdescription', 128).notNullable
        tbl.string('notes', 500)
        tbl.boolean('completed').defaultTo(false)
        tbl.integer('projectid')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
  
};
