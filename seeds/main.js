var knex = require('../db/knex');

exports.seed = function(knex, promise){
  return knex('move_sets').del()
  .then(function(){
    return knex('pokemon').del()
  }).then(function(){
    return knex('teams').del();
  }).then(function(){
    return knex('teams').insert({
      id:1
    });
  }).then(function(){
    return Promise.all([
      knex('pokemon').insert({
        id: 1,
        team_id: 1,
        api_id: 78
      }),
      knex('pokemon').insert({
        id: 2,
        team_id: 1,
        api_id: 122
      }),
      knex('pokemon').insert({
        id: 3,
        team_id: 1,
        api_id: 9
      }),
      knex('pokemon').insert({
        id: 4,
        team_id: 1,
        api_id: 80
      }),
      knex('pokemon').insert({
        id: 5,
        team_id: 1,
        api_id: 137,
      }),
      knex('pokemon').insert({
        id: 6,
        team_id: 1,
        api_id: 49
      })
    ])
  }).then(function(){
    return knex('move_sets').insert({
      id: 1,
      api_id: 4
    })
  })
}
