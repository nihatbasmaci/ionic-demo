// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Myapp', ['ionic', 'Services'])

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

.controller('GithubController', function($scope, $ionicLoading,$timeout, githubService){
  $scope.show = function() {
   $ionicLoading.show({
     template: 'Loading...'
   });
  };
  $scope.hide = function(){
   $ionicLoading.hide();
  };
  $scope.infos = []
  $scope.img_visible = false
  $scope.setGithubUser = function(){
    $scope.clear()
    $scope.show();
    githubService.userInfo($scope.username).then(function(data) {
      $scope.infos = data
      $scope.img_visible = true
      $scope.hide();
    })
  }

  $scope.setGithubUserRepos = function(){
    $scope.clear()
    githubService.repoInfo($scope.username).then(function(data) {
      $scope.repos = data
    })
  }
  $scope.clear = function(){
    $scope.img_visible = false
    $scope.repos = [];
    $scope.infos = [];
  }

  $scope.doRefresh = function() {
    $timeout(function() {
      $scope.clear()
      $scope.$broadcast('scroll.refreshComplete')
      console.log("Yenile Yapıldı")
    },3000)
  };
})

angular.module('Services', ['ionic'])
.factory('githubService', function($http, $q){
  var getUserInfo = function(username){
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "https://api.github.com/users/" + username
    })
    .success(function(response){
      deferred.resolve(response);
    })
    .error(function(response, error){
      deferred.reject(error);
    })
    return deferred.promise;
  }
  var getRepoInfo = function(username){
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "https://api.github.com/users/" + username + "/repos"
    })
    .success(function(response){
      deferred.resolve(response);
    })
    .error(function(response, error){
      deferred.reject(error);
    })
    return deferred.promise;
  }
  return({
    userInfo: getUserInfo,
    repoInfo: getRepoInfo
  });
})
