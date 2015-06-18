
var express = require('express');
var tweetBank = require('../tweetBank.js');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

// router.get('/', function (req, res) {
//   var tweets = tweetBank.list();
//   res.render( 'index', { title: 'Twitter.js', tweets: tweets, seeMore: "See More", showForm: true } );
// });

// router.get('/users/:name', function(req, res) {
//   var name = req.params.name;
//   var tweets = tweetBank.find( {name: name} );
//   //res.send(list);
//   res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: tweets, seeMore: "See More", showForm: true, Name: name} );
// });

// router.get('/users/:name/tweets/:id', function(request, response) {
// 	var name = request.params.name;
// 	var id = parseInt(request.params.id);
//   	var tweets = tweetBank.find( {id: id} );
//   	response.render( 'index', { title: "Post by " + name, tweets: tweets, seeMore: "", showForm: false} );
// });

// router.post('/submit', function(request, response){
// 	var id = tweetBank.add(request.body.name, request.body.text);
// 	var tweets = tweetBank.find( {id: id} );
//   //io.sockets.emit('new_tweet', tweets)
// 	response.render( 'index', { title: "New post by " + request.body.name, tweets: tweets, seeMore: "", showForm: false } );
// })

module.exports = function(io){
  router.get('/', function (req, res) {
    var tweets = tweetBank.list();
    res.render( 'index', { title: 'Twooter.js', tweets: tweets, seeMore: "See More", showForm: true } );
  });

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var tweets = tweetBank.find( {name: name} );
    //res.send(list);
    res.render( 'index', { title: 'Twooter.js - Posts by '+name, tweets: tweets, seeMore: "See More", showForm: true, Name: name} );
  });

  router.get('/users/:name/tweets/:id', function(request, response) {
    var name = request.params.name;
    var id = parseInt(request.params.id);
    var tweets = tweetBank.find( {id: id} );
    response.render( 'index', { title: "Post by " + name, tweets: tweets, seeMore: "", showForm: false} );
  });

  router.post('/submit', function(request, response){
    var id = tweetBank.add(request.body.name, request.body.text);
    var tweets = tweetBank.find( {id: id} );
    console.log(tweets);
    io.sockets.emit('new_tweet', tweets);

    //response.render( 'index', { title: "New post by " + request.body.name, tweets: tweets, seeMore: "", showForm: false } );
    });
  return router;
};

//WRAP ALL THE ROUTER STUFF IN EXPORTS FUNCTION