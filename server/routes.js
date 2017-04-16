var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app){
    // Set up endpoint for the records here

    var service = require('./controllers/serviceController');

    // API Endpoint
    app.post('/login', bodyParser.json(), service.login);
    app.post('/addAsset', bodyParser.json(), service.addAsset);

    //

    app.get('/', function(req, res){
        res.sendFile(path.resolve(__dirname + '/../client/views/index.html'));
    });

    app.get('/add', function(req, res){
        res.sendFile(path.resolve(__dirname + '/../client/views/add.html'))
    });
    
    app.get('/search', function(req, res){
        res.sendFile(path.resolve(__dirname + '/../client/views/search.html'));
    });

    // Static mapping redirects
    app.use('/js', express.static(__dirname + '/../client/js'));
    app.use('/css', express.static(__dirname + '/../client/styles'));
    app.use('/components', express.static(__dirname + '/../client/components'));
    app.use('/scripts', express.static(__dirname + '/../node_modules'));
}
