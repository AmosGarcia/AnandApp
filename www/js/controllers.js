angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.facebook=function(){
  window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){PopUpService.simpleAlert("La aplicación de Facebook no está disponible","No se encuentra");});
  };
  $scope.twitter=function(){
  window.plugins.socialsharing.shareViaTwitter('Message and link via Twitter', null /* img */, 'http://www.x-services.nl');
  };
  $scope.whatsapp=function(){
  window.plugins.socialsharing.shareViaWhatsApp('Message via WhatsApp', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){PopUpService.simpleAlert("La aplicación de WhatsApp no está disponible","No se encuentra")});
  };
})

.controller('HomeCtrl', function($scope, $stateParams) {
});
