'use strict';
import angular from 'angular';
import ngRoute from 'angular-route';

angular.module('app', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: myLocalized.partials + 'main.html',
    controller: 'Main'
  })
  .when('/:ID', {
    templateUrl: myLocalized.partials + 'content.html',
    controller: 'Content'
  });
})
.controller('Main', function($scope, $http, $routeParams) {
  $http.get('wp-json/posts/').success(function(res) {
    $scope.posts = res;
  });
})
.controller('Content', function($scope, $http, $routeParams) {
  $http.get('wp-json/posts/' + $routeParams.ID).success(function(res) {
    $scope.post = res;
  });
})
.controller("NavCtrl", function($scope, $http) {
  $http.get('wp-json/pages/').success(function(res) {
    $scope.pages = res;
  });
})
.controller('BaseCtrl', function () {
  this.headline = 'Basis Controllerxx';
});
