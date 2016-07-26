// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/books');

// Routs automated
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router,'/books');

// Return router
module.exports = router;