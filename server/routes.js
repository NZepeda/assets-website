var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app){
    // Set up endpoint for the records here

    var service = require('./controllers/serviceController');

    // API Endpoint
    app.post('/login', bodyParser.json(), service.login);
    app.post('/addAsset', bodyParser.json(), service.addAsset);
    app.post('/updateAsset', bodyParser.json(), service.updateAsset);
    app.get('/getAssets', service.getAllAssets);
    app.post('/getSingleAsset',bodyParser.json(), service.getSingleAsset);
    app.post('/deleteAsset', bodyParser.json(), service.deleteAsset);
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

    app.get('/view', function(req, res){
        res.sendFile(path.resolve(__dirname + '/../client/views/view.html'));
    });

    app.get('/update', function(req, res){
        res.sendFile(path.resolve(__dirname + '/../client/views/update.html'));
    });


    // Static mapping redirects
    app.use('/js', express.static(__dirname + '/../client/js'));
    app.use('/css', express.static(__dirname + '/../client/styles'));
    app.use('/components', express.static(__dirname + '/../client/components'));
    app.use('/scripts', express.static(__dirname + '/../node_modules'));
}
