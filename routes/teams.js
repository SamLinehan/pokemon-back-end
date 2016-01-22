var express = require('express');
var Router = require('router');
var knex = require('../db/knex');
var router = express.Router();
require('dotenv').load();

router.get('/', function(request, response){
  knex('teams').select().then(function(result){
      response.json(result);
  });
})

router.get('/:id', function(request, response){
  knex('teams').join('pokemon', 'teams.id', '=', 'pokemon.team_id').select('pokemon.id', 'pokemon.api_id as pokemon_id').where('teams.id', request.params.id).then(function(result){
    response.json(result);
  })
  // knex.raw('select teams.id, pokemon.id, pokemon.api_id from teams inner join pokemon on teams.id = pokemon.team_id')
})

module.exports = router;
