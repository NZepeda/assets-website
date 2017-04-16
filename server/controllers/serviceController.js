var mongoose = require('mongoose');
User = mongoose.model('User');
Asset = mongoose.model('Asset');

exports.login = function(req, res){

    var result = {
        loginSuccess: false
    };

    User.findOne({username: req.body.username, password: req.body.password}, function(err, user){
        if(err){
            res.status(500).send("Unable to query db");
        }
        if(user){
            result.loginSuccess = true;                        
        }
        res.status(200).send(result);
    });
    
}

exports.addAsset = function(req, res){
    
    Asset.create(req.body, function(err, asset){
  
        if(err){
            res.status(500).send("Error in creating a new asset");
        }
        else{
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(asset);
        } 
    });
    
}