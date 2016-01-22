
exports.up = function(knex, Promise) {
  return knex.schema.createTable('move_sets', function(table){
    table.increments();
    table.integer('api_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('move_sets');
};
