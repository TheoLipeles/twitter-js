
var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, seeMore: "See More", showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  //res.send(list);
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: tweets, seeMore: "See More" } );
});

router.get('/users/:name/tweets/:id', function(request, response) {
	var name = request.params.name;
	var id = parseInt(request.params.id);
  	var tweets = tweetBank.find( {id: id} );
  	response.render( 'index', { title: "Post by " + name, tweets: tweets, seeMore: "", showForm: true } );
});

module.exports = router;