
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', function(table){
    table.increments();
    table.dateTime('date_saved');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams');
};
