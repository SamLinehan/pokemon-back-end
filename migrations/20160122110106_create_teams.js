
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', function(table){
    table.increments();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams');
};
