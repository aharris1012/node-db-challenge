exports.up = function(knex) {
    return knex.schema
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('task_description', 128).notNullable
        tbl.string('notes', 500)
        tbl.boolean('completed').defaultTo(false)
        tbl.integer('project_id')
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
