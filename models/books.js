// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var bSchema = new mongoose.Schema({
	Name: String,
	Price: Number
},{versionKey: false});

// export modules
module.exports = restful.model('books', bSchema);