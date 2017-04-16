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
      
      if(response.data.loginSuccess == true){
        $window.location.href = '/view';
      }
      else{
        toastr.error('Invalid credentials');
        $scope.password = "";
      } 
    });
  }
}]);

controllerModule.controller('AddController', ['$scope','$q', 'Data', function($scope, $q, Data){
  
  $scope.manufacturer = {
    name: "",
    address: "",
    phone: "",
    website: ""
  }

  $scope.info = {
    category: "",
    assetNumber: "",
    model: "",
    datePurchased: "",
    purchasePrice: "",
    warExpiration: "",
    retiredDate: "",
    description: "",
  }

  $scope.asset = {
    manufacturer : $scope.manufacturer,
    info: $scope.info
  }

  $scope.addAsset = function(){
    Data.addAsset($scope.asset).then(function(response){
      console.log(response);
    });
  }

}]);

controllerModule.controller('ViewController', ['$scope', '$q', 'Data', function($scope, $q, Data){

  // Model as empty object at initialization
  $scope.assets = {};
  $scope.assetInfo = {};
  $scope.manufacturer = {};

  $scope.infoHeaders = ["Category", "Model", "Date Purchased", "Purchace Price", "Retired Date", "Warranty Expiration", "Description"]

  Data.getAllAssets().then(function(response){
    $scope.assets = response.data;
    $scope.assetInfo = response.data.info;
    $scope.manufacturer = response.data.manufacturer;

    console.log($scope.assets);
  });
}]);
