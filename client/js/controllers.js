var controllerModule = angular.module('AssetsWebsite.controllers', []);

controllerModule.controller('LoginController', ['$scope', '$q', function($scope, $q){

  var username = $scope.username;
  var password = $scope.password;

  $scope.$watch('username', function(newValue, oldValue){

  });

  $scope.login = function(){
    // implement login and redirect here
    console.log($scope.username);
    console.log($scope.password);
  }

}]);

controllerModule.controller('AddController', ['$scope','$q', function($scope, $q){
  console.log('In the add controller');
}]);
