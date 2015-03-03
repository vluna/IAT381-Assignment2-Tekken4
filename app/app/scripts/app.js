'use strict';

/**
 * @ngdoc overview
 * @name iat381Assignment2MozzappAApp
 * @description
 * # iat381Assignment2MozzappAApp
 *
 * Main module of the application.
 */
angular
  .module('iat381Assignment2MozzappAApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mediaPlayer',
    'ngDragDrop',
    'angular-carousel'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
