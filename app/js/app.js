'use strict';

/* App Module */

angular.module('kegerfaceApp', ['kegerfaceFilters']).
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
