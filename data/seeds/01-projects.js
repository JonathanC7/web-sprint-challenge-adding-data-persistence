
exports.seed = function(knex) {
      return knex('projects').insert([
        { name: 'house renovation', description: 'Renovate a house to try and raise the value.', complete: false }
      ]);
};
