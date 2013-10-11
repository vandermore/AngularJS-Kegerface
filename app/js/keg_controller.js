/* Controllers */

function KegListController($scope, $http) {
   "use strict";

    $http.get('dataStore/kegs.json').success( function ( data ) {
        $scope.kegs = data;
        //This just limits the data to the first 3 kegs, but it's not the preferred way to lazy load. Since this isn't lazy at all!
//        $scope.kegs = data.splice(0, 3);
    });
    
    $http.get('dataStore/srmLovibond.json').success( function ( data ) {
        $scope.srmLovibond = data;
    });
    
//    getLovibondColor = function( data ) {
//        return = "#FF0000";
//    };
//    
    $scope.orderProp = 'name';
    
    kegerfaceApp.controller('KegListController', function KegListController($scope, $routeParams) {
        $scope.foo = $routeParams.foo;
    });
}