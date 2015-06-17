// Required files
var express = require( 'express' );
var morgan = require('morgan');


var app = express();

// Log server activity
app.use(morgan("dev"));

app.get("/", function(request, response) {
	response.send("Welcome!")
});


app.listen(3000, function() {
	console.log("App listening");
});