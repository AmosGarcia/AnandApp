angular.module('starter.controllers', ['ngCordova'])

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


.controller("ScannerCtrl", function($scope, $cordovaBarcodeScanner, $http, $ionicPopup) {
    $scope.scanBarcode = function() {
      var code = 'https://www.google.es/';
      // var iframe=document.getElementsByClassName('framesssScanner');
      // $("#framesssScanner").attr("src", code);
      // $scope.srcFrame = code;
      // // var iframe = document.getElementById('iframeCode');
      // $('#framesssScanner').attr('src', code);
      // iframe.src=code;
      window.open(code, '_top', 'location=yes');
      // window.location.replace(code);
      // window.location="#/app/contact";
        // $cordovaBarcodeScanner.scan().then (function(imageData) {
        //   alert(imageData.text);
        //     var code = imageData.text;
        //     var iframe = document.getElementById("iframeCode");
        //     iframe.src=code;
        //     window.location="#/app/contact";
        //
        //
        //
        // }, function(error) {
        //       alert("error");
        // });

    };


    $scope.top = function() {
      var code = 'https://www.google.es/';
      window.open(code, '_top', 'location=yes');

    };
    $scope.self = function() {
      var code = 'https://www.google.es/';
      window.open(code, '_self', 'location=yes');

    };
    $scope.blank = function() {
      var code = 'https://www.google.es/';
      window.open(code, '_blank', 'location=yes');

    };
    $scope.framename = function() {
      var code = 'https://www.google.es/';
      window.open(code, 'framename', 'location=yes');
      window.location="#/app/contact";

    };
});
