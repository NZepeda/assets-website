var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assetSchema = new Schema({

    manufacturer : {
        name: String,
        address: String,
        phone: String,
        website: String
    },
    info :{
        category: String,
        assetNumnber: String,
        model: String,
        datePurchased: String,
        purchasePrice: String,
        warExpiration: String,
        retiredDate: String,
        description: String,
    }

});

mongoose.model('Asset', assetSchema);