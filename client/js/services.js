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
        })
    }
    // ToDo: Implement service functions here
    return data;
}]);
