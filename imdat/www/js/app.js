// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'ionic-material'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('GeoCtrl', function($scope, $log, $cordovaGeolocation, $cordovaSms) {
  $scope.getPosition = function() {
    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        $log.info("İşlem Başarılı")
        $scope.lat  = position.coords.latitude
        $scope.long = position.coords.longitude
        sendSMS(position.coords.latitude, position.coords.longitude)
      }, function(err) {
        $log.error("position işlemi başarısız" + err.message)
      });
  }

  sendSMS = function(lat,lang) {
    var options = {
          replaceLineBreaks: false,
          android: {
              intent: 'INTENT'
          }
      };
  var message = "Yardım Edin! Enlem: " + lat +" Boylam: " + lang
  $cordovaSms
    .send("05363490685", message , options)
    .then(function() {
      alert('Message sent successfully');
    }, function(error) {
      alert('Message Failed:' + error);
    });
  }
});
