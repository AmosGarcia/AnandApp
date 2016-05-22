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


.controller("ScannerCtrl", function($scope, $cordovaBarcodeScanner) {
    $scope.scanBarcode = function() {
      alert("hola");
        $cordovaBarcodeScanner.scan().then (function(imageData) {
          alert(imageData.text);
          //
          //   var code = imageData.text;
          //   var api_key = "a3240ae77dcb1308e094e24c16698d96";
          //
          //   var req =
          //   {
          //       method: 'GET',
          //       url: "http://paselibre.info/api/v1/tickets/validar?api_key=" + api_key + "&code=" + code
          //   }
          //
          //   $http(req).
          //   success(function(data, status, headers, config)
          //   {
          //       if (data.status == "success") {
          //           var alertPopup = $ionicPopup.alert({
          //               title: 'Pase Libre',
          //               template: "Ticket válido:" + "<br>Evento: " + data.data.event + "<br>Tipo: " + data.data.description + "<br>Cantidad: " + data.data.quantity,
          //               okText: "Aceptar"
          //           }).then();
          //
          //       } else {
          //           var alertPopup = $ionicPopup.alert({
          //               title: 'Pase Libre',
          //               template: "Error: " + data.message,
          //               okText: "Aceptar"
          //           }).then();
          //       }
          //   }).
          //   error(function(data, status, headers, config)
          //   {
          //
          //   });

        }, function(error) {
              alert("error");
        });

    };

});
