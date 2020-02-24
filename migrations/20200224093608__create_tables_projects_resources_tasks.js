exports.up = function(knex) {
    return knex.schema.createTable('Projects', tbl => {
        tbl.increments(); 

        tbl.string('name', 255)
        .notNullable();

        tbl.string('description', 255)

        tbl.boolean('completed')
        .notNullable()
        .defaultTo(false)
    })

    .createTable('Resources', tbl => {
        tbl.increments();

        tbl.string('name', 255)
        .notNullable()

        tbl.string('description', 255)
    })

    .createTable('Tasks', tbl => {
        tbl.increments();

        tbl.string('description', 255)
        .notNullable();

        tbl.string('notes', 255)

        tbl.boolean('completed')
        .notNullable()
        .defaultTo(false)

        //  key
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })

    .createTable('Projects_Resources', tbl => {
        tbl.primary(['project_id','resources_id'])

        //key
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        // key
        tbl.integer('resources_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Projects_Resources')
    .dropTableIfExists('Tasks')
    .dropTableIfExists('Resources')
    .dropTableIfExists('Projects')
};