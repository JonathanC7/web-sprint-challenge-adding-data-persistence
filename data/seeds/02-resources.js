
exports.seed = function(knex) {
      return knex('resources').insert([
        { name: 'money', description: 'about 23,000 out of pocket cost.', project_id: 1 }
      ]);
};
