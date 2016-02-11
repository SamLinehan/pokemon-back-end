var knex = require('../db/knex');

exports.seed = function(knex, promise){
  return knex('move_sets').del()
  .then(function(){
    return knex('pokemon').del();
  }).then(function(){
    return knex('teams').del();
  }).then(function(){
  return knex.raw('ALTER SEQUENCE "move_sets_id_seq" RESTART WITH 1;');
}).then(function(){
  return knex.raw('ALTER SEQUENCE "pokemon_id_seq" RESTART WITH 1;');
}).then(function(){
  return knex.raw('ALTER SEQUENCE "teams_id_seq" RESTART WITH 1;');
}).then(function(){
    return knex('teams').insert({
      date_saved: 'now'
    });
  }).then(function(){
    return Promise.all([
      knex('pokemon').insert({
        team_id: 1,
        api_id: 78
      }),
      knex('pokemon').insert({
        team_id: 1,
        api_id: 122
      }),
      knex('pokemon').insert({
        team_id: 1,
        api_id: 9
      }),
      knex('pokemon').insert({
        team_id: 1,
        api_id: 80
      }),
      knex('pokemon').insert({
        team_id: 1,
        api_id: 137,
      }),
      knex('pokemon').insert({
        team_id: 1,
        api_id: 49
      })
    ]);
  }).then(function(){
    return Promise.all([
      knex('move_sets').insert({
        pokemon_id: 1,
        api_id: 78
      }),
      knex('move_sets').insert({
        pokemon_id: 1,
        api_id: 120
      }),
      knex('move_sets').insert({
        pokemon_id: 2,
        api_id: 2
      }),
      knex('move_sets').insert({
        pokemon_id: 2,
        api_id: 15
      }),
      knex('move_sets').insert({
        pokemon_id: 2,
        api_id: 90
      }),
      knex('move_sets').insert({
        pokemon_id: 2,
        api_id: 33
      }),
      knex('move_sets').insert({
        pokemon_id: 3,
        api_id: 48
      }),
      knex('move_sets').insert({
        pokemon_id: 6,
        api_id: 10
      }),
    ]);
  });
};
