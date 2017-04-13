var mongoose = require('mongoose');
User = mongoose.model('User');

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