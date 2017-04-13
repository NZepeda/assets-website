'use strict'

var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');

// Require the models here
require('./server/models/user');

var app = express();

var port = process.env.PORT || 8000;

// Set up mongo connection
var mongoUrl = "mongodb://admin:pass123@ds159330.mlab.com:59330/assets"

mongoose.connect(mongoUrl);

var db = mongoose.connection;

db.on('error', function(){
    // Throw error if we can't connect to our mongo db
    throw new Error('Unable to connect to database at ' + mongoUrl);
});

require('./server/routes.js')(app);

// Start the server
app.listen(port, function(req, res){
    console.log('I\'m listening on port ' + port);
});