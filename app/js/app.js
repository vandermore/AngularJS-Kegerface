'use strict';

/* App Module */

var kegerfaceApp = angular.module('kegerfaceApp', ['kegerfaceController', 'lovibondController', 'kegerfaceFilters', 'kegerfaceServices']).
  config(['$routeProvider', function($routeProvider) {
      /* Super simple route provider */
      $routeProvider.
          when('/', {
              templateUrl: 'partials/beer-list.html',   controller: 'KegListController'
          }).
          otherwise({
              redirectTo: '/'
          });
  }]);
