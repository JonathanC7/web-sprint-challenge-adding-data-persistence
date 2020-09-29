
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('name', 128)
            .unique()
            .notNullable();
        tbl.string('description', 128)
        tbl.boolean('complete')
            .defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments('id')
        tbl.string('name', 128)
        tbl.string('description', 128)
        tbl.integer('project_id')
            .notNullable()
            .references('projects.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('tasks', tbl => {
        tbl.increments('id')
        tbl.string('description')
        tbl.string('notes')
        tbl.boolean('complete')
            .defaultTo(false)
        tbl.integer('project_id')
            .notNullable()
            .references('projects.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
