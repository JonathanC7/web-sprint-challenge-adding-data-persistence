
exports.seed = function(knex) {
      return knex('tasks').insert([
        {name: 'gather supplies', description: '', notes: '', project_id: 1, complete: false}
      ]);
};
