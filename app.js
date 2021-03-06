// Required files
var express = require( 'express' );
var morgan = require('morgan');
var swig = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

//Setup server
var app = express();
var server = app.listen(3000, function() {
	console.log("App listening");
});
var io = socketio.listen(server);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({cache: false});
//Swig documentation for app.set views path
//app.set('views', __dirname + '/views');

// Log server activity
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes(io));

app.use(express.static(__dirname + '/public'));


//// Old Routes
// app.get('/', function(request, response){
// 	response.send("Hello!");
// })
// app.get('/views', function(request, response){
// 	var people = [{name: "Full"}, {name: "Stacker"}, {name: "Son"}];
// 	response.render('index.html', {title: "Hall of Fame", people: people});
// 	//response.send("Welcome to views");
// })















