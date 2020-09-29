
exports.seed = function(knex) {
      return knex('tasks').insert([
        { description: 'gather supplies', notes: '', project_id: 1, complete: false}
      ]);
};
