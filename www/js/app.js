// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var social = angular.module('starter', ['ionic','ngCordova', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html'
      }
    }
  })

  .state('app.gallery', {
  url: "/gallery",
  views: {
    'menuContent' :{
      templateUrl: "templates/gallery.html"
    }
    }
  })

  .state('app.shop', {
    url: '/shop',
    views: {
      'menuContent': {
        templateUrl: 'templates/shop.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});

social.controller("ExampleController", function($scope, $cordovaSocialSharing){

 $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");
    }

});



/*App.controller("ExampleController", function($scope, $cordovaBarcodeScanner, $http, $ionicPopup) {
    $scope.scanBarcode = function() {
      alert("hola");
        $cordovaBarcodeScanner.scan().then(function(imageData) {
          alert("holasss");
            var code = imageData.text;
            var api_key = "a3240ae77dcb1308e094e24c16698d96";

            var req =
            {
                method: 'GET',
                url: "http://paselibre.info/api/v1/tickets/validar?api_key=" + api_key + "&code=" + code
            }

            $http(req).
            success(function(data, status, headers, config)
            {
                if (data.status == "success") {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Pase Libre',
                        template: "Ticket válido:" + "<br>Evento: " + data.data.event + "<br>Tipo: " + data.data.description + "<br>Cantidad: " + data.data.quantity,
                        okText: "Aceptar"
                    }).then();

                } else {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Pase Libre',
                        template: "Error: " + data.message,
                        okText: "Aceptar"
                    }).then();
                }
            }).
            error(function(data, status, headers, config)
            {

            });

        }, function(error) {
            alert("error");
        });

    };

});*/
