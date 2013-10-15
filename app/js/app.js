'use strict';

/* App Module */
/* kegerfaceApp is the app name, and all of the strings in the array are dependencies for the app.*/
var kegerfaceApp = angular.module('kegerfaceApp', ['kegerfaceController', 'lovibondController', 'kegerfaceFilters', 'kegerfaceServices']);

/* Configuration block. Configures the route provider for the application. We don't entirely need this one here, it's just here to learn from. */
kegerfaceApp.config(['$routeProvider', function($routeProvider) {
      /* Super simple route provider */
      $routeProvider.
          when('/', {
              templateUrl: 'partials/beer-list.html',   controller: 'KegListController'
          }).
          otherwise({
              redirectTo: '/'
          });
  }]);
