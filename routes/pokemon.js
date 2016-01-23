var express = require('express');
var Router = require('router');
var knex = require('../db/knex');
var router = express.Router();
require('dotenv').load();

router.get('/', function(request, response){
  knex('pokemon').select().then(function(result){
      response.json(result);
  });
})

module.exports = router;
