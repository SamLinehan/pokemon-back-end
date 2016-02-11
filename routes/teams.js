var express = require('express');
var Router = require('router');
var knex = require('../db/knex');
var router = express.Router();

function formatMoves(team_data) {
  return new Promise(function(resolve, reject) {
    var moves = [];
    for (var i in team_data) {
      moves.push(knex('move_sets').select('api_id').where('pokemon_id', team_data[i].id));
    }
    Promise.all(moves).then(function(movedata) {
      for (var i in movedata) {
        team_data[i].moves = movedata[i].map(function(move){
          return move.api_id;
        });
      }
      resolve(team_data);
    });
  });
}

function savePokemon(team_id, pokemon) {
  return new Promise(function(resolve, reject) {
    knex('pokemon').insert({
      team_id: parseInt(team_id),
      api_id: parseInt(pokemon.id)
    }, 'id').then(function(id){
      saveMove(id, pokemon.moves).then(function(){
        resolve();
      });
    });
  });
}

function saveMove(pokemon_id, moves) {
  return new Promise(function(resolve, reject) {
    var addedMoves = moves.map(function(move){
      return knex('move_sets').insert({
        pokemon_id: parseInt(pokemon_id),
        api_id: parseInt(move)
      });
    });
    Promise.all(addedMoves).then(function(){
      resolve();
    });
  });
}

router.get('/', function(request, response){
  knex('teams').select().then(function(result){
      response.json(result);
  });
});

router.get('/:id', function(request, response){
  knex('teams').join('pokemon', 'teams.id', '=', 'pokemon.team_id').select('pokemon.id', 'pokemon.api_id as pokemon_id').where('teams.id', request.params.id)
  .then(function(result){
    return formatMoves(result);
  })
  .then(function(team) {
    response.json(team);
  });
});

router.post('/', function(request, response) {
  knex('teams').insert({
    date_saved: 'now'
  }, 'id')
  .then(function(team_id) {
    console.log(team_id);
    return new Promise(function(resolve, reject) {
      for (var i in request.body) {
        savePokemon(team_id, request.body[i]);
      }
      resolve(team_id);
    });
  }).then(function(team_id) {
    response.send(team_id);
  });
});

module.exports = router;
