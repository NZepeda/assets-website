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

exports.getAllAssets = function(req, res){
    Asset.find({}, function(err, results){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(results);
        }
    });
}

exports.updateAsset = function(req, res){
    console.log(req.body);
    Asset.findOne({_id: req.body.id}, function(err, asset){
        if(err){
            res.status(500).send("Unable to update the asset");
        }
        if(asset){
            console.log(asset);
            asset.info = req.body.info;
            asset.manufacturer = req.body.manufacturer;
            asset.save();
        }
    });
    res.status(200).send("Good");
}

exports.getSingleAsset = function(req, res){
    Asset.findOne({_id: req.body.assetId}, function(err, asset){
        if(err){
            res.status(500).send("Unable to query db");
        }
        if(asset){ 
            res.status(200).send(asset);                      
        }       
    });   
}

exports.deleteAsset = function(req, res){
    Asset.findOneAndRemove({_id: req.body.assetId}, function(err){
        if(err){
            res.status(500).send("Unable to delete asset");
        }
        else{
            res.status(200).send("Successfully deleted asset");
        }
    });
}