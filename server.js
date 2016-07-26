// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

// connect with mongodb
mongoose.connect('mongodb://localhost/test');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Routes the api
app.use('/api',require('./routes/apids'));

// Hellow world ...
app.get('/',function(req, res){
	res.send('Welcome to homepage');
})

app.listen(9000);
console.log('Application is started');