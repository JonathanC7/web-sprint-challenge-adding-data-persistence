
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
        tbl.increments()
        tbl.string('name', 128)
            .notNullable()
        tbl.string('description', 128)
        tbl.integer('project_id')
    })
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('description')
        tbl.string('notes')
        tbl.boolean('complete')
            .defaultTo(false)
        tbl.integer('project_id')
            .notNullable()
            .unique()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
};
