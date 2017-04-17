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

controllerModule.controller('AddController', ['$scope','$q', '$window', 'Data', function($scope, $q, $window, Data){
  
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
      $window.location.href = "/view";
    });
  }

}]);

controllerModule.controller('ViewController', ['$scope', '$q', 'Data', '$window', function($scope, $q, Data, $window){

  // Model as empty object at initialization
  $scope.assets = {};
  $scope.assetInfo = {};
  $scope.manufacturer = {};

  $scope.infoHeaders = ["Category", "Model", "Date Purchased", "Purchace Price", "Retired Date", "Warranty Expiration", "Description"]

  Data.getAllAssets().then(function(response){
    $scope.assets = response.data;
    $scope.assetInfo = response.data.info;
    $scope.manufacturer = response.data.manufacturer;
  });

  $scope.addNewAsset = function(){
    $window.location.href = '/add';
  }

  $scope.updateAssetButtonClicked = function(assetId){
    $window.location.href = '/update?id=' + assetId;
  }

  $scope.deleteAssetButotnClicked = function(assetId){
    Data.deleteAsset(assetId).then(function(){
      $window.location.reload();
    });
  }
}]);

controllerModule.controller('UpdateController', ['$scope', '$q', '$window', '$location','$routeParams', 'Data', function($scope, $q, $window, $location, $routeParams, Data){
  var id = $location.search().id;

  Data.getSingleAsset(id).then(function(response){
    $scope.info = response.data.info;
    $scope.manufacturer = response.data.manufacturer;
  });

  $scope.updateAssetButtonClick = function(){
    $scope.asset = {
      manufacturer: $scope.manufacturer,
      info: $scope.info,
      id: id
    }

    Data.updateAsset($scope.asset).then(function(response){
      $window.location.href = '/view';
    });
  }

}]);