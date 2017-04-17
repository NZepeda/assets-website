var serviceModule = angular.module('AssetsWebsite.services', []);

serviceModule.service('Data', ['$location', '$http', '$window', '$q', function($location, $http, $window, $q){

    var data = {};

    data.login = function(user){

        var req = {
            method: 'POST',
            url: 'http://' + location.host + '/login',
            data: user
        }

        return $http(req).then(function(response){
            return response;
        }).catch(function(error){
            console.log(error);
        });
    }

    data.addAsset = function(asset){
        var req = {
            method: 'POST',
            url: 'http://' + location.host + '/addAsset',
            data: asset
        }

        return $http(req).then(function(response){
            return response;
        }).catch(function(error){
            console.log(error);
        });
    }

    data.getAllAssets = function(){
        return $http({
            method: 'GET',
            url: 'http://' + location.host + '/getAssets'
        }).
        then(function(response){
            return response;
        }).catch(function(error){
            console.log(error);
        });
    }

    data.getSingleAsset = function(assetId){
        var req = {
            method: 'POST',
            url: "http://" + location.host + '/getSingleAsset',
            data: {assetId: assetId}
        }

        return $http(req).then(function(response){
            return response;
        }).catch(function(error){
            console.log(error);
        });
    }

    data.updateAsset = function(asset){
        var req = {
            method: 'POST',
            url: "http://" + location.host + '/updateAsset',
            data: asset
        }

        return $http(req).then(function(response){
            return response;
        }).catch(function(error){
            console.log(error);
        });
    }

    data.deleteAsset = function(assetId){
        var req = {
            method: 'POST',
            url: "http://" + location.host + '/deleteAsset',
            data: {assetId: assetId}
        }

        return $http(req).then(function(response){
            return response;
        }).catch(function(error){
            console.log(error);
        });
    }
    
    return data;
}]);
