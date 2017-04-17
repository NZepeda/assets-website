
// Declares different dependencies for AngularJs app
var app = angular.module('AssetsWebsite', [
  'ngRoute',
  'AssetsWebsite.services',
  'AssetsWebsite.controllers'
]);

// Configuration
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {


  // Configure HTML5 mode
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

}]);
