
exports.up = function(knex, Promise) {
  return knex.schema.createTable('move_sets', function(table){
    table.increments();
    table.integer('pokemon_id').references('id').inTable('pokemon');
    table.integer('api_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('move_sets');
};
