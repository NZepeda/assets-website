var controllerModule = angular.module('AssetsWebsite.controllers', ['AssetsWebsite.services']);

controllerModule.controller('LoginController', ['$scope', '$q', '$location', '$window', 'Data', function($scope, $q, $location, $window, Data){

  var username = $scope.username;
  var password = $scope.password;

  // Fires when login button is clicked
  $scope.login = function(){

    var user = {
      username: $scope.username,
      password: $scope.password
    }

    Data.login(user).then(function(response){
      console.log(response.data);
      if(response.data.loginSuccess == true){
        $window.location.href = '/add';
      }
      else{
        toastr.error('Invalid credentials');
        $scope.password = "";
      } 
    });
  }
}]);

controllerModule.controller('AddController', ['$scope','$q', function($scope, $q){
  
  $scope.manufacturer = {
    name: "",
    address: "",
    phone: "",
    website: ""
  }

  $scope.info = {
    assetNumber: "",
    model: "",
    datePurchased: "",
    purchasePrice: "",
    warExpiration: "",
    retiredDate: "",
    description: "",
    comments: []
  }

  $scope.asset = {
    manufacturer : $scope.manufacturer,
    info: $scope.info
  }

  $scope.addAsset = function(){
    console.log($scope.model);
  }

}]);
