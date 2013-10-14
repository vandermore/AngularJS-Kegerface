'use strict';

/* App Module */

angular.module('kegerfaceApp', ['kegerfaceFilters', 'kegerfaceServices']).
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
