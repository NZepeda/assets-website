var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app){
    // Set up endpoint for the records here

    app.get('/', function(req, res){
        res.sendFile(path.resolve(__dirname + '/../client/views/index.html'));
    });

	app.get('/search', function(req, res){
        res.sendFile(path.resolve(__dirname + '/../client/views/search.html'));
    });

    // Static mapping redirects
    app.use('/js', express.static(__dirname + '/../client/js'));
    app.use('/css', express.static(__dirname + '/../client/css'));
    app.use('/components', express.static(__dirname + '/../client/components'));
    app.use('/scripts', express.static(__dirname + '/../node_modules'));
}