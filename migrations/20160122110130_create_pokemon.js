
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pokemon', function(table){
    table.increments();
    table.integer('team_id').references('id').inTable('teams');
    table.integer('api_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pokemon');
};
