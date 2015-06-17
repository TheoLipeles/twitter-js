// Required files
var express = require( 'express' );
var morgan = require('morgan');
var swig = require('swig');
var index = require('./routes/index.js')


var app = express();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({cache: false});
//Swig documentation for app.set views path
//app.set('views', __dirname + '/views');

// Log server activity
app.use(morgan("dev"));

app.get('/', function(request, response){
	response.send("Hello!");
})
app.get('/views', function(request, response){
	var people = [{name: "Full"}, {name: "Stacker"}, {name: "Son"}];
	response.render('index.html', {title: "Hall of Fame", people: people});
	//response.send("Welcome to views");
})

app.listen(3000, function() {
	console.log("App listening");
});
