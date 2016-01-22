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
    })
  }).then(function(){
    return knex('pokemon').insert({
      id: 1,
      team_id: 1,
      api_id: 78
    })
  }).then(function(){
    return knex('move_sets').insert({
      id: 1,
      api_id: 4
    })
  })
}
