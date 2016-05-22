angular.module('starter.controllers', ['ionic','ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('HomeCtrl', function($scope, $stateParams) {
})


.controller("ScannerCtrl", function($scope, $cordovaBarcodeScanner,$cordovaInAppBrowser) {
    $scope.scanBarcode = function() {
         $cordovaBarcodeScanner.scan().then (function(imageData) {
             var code = imageData.text;
             window.open(code, '_self', 'location=no');
         }, function(error) {
               alert("Se ha producido algún error");
         });

    };


    /*$scope.top = function() {
      var code = 'https://www.google.es/';
      window.open(code, '_system');

    };
    $scope.self = function() {
      var code = 'https://www.google.es/';
      window.open(code, '_blank');

    };
    $scope.blank = function() {
      var code = 'https://www.google.es/';
      window.open(code, '_blank', 'location=no');

    };
    $scope.framename = function() {
      var code = 'https://www.google.es/';
      window.location="#/app/contact";
      window.open(code, '_self', 'location=no');

    };*/
});
