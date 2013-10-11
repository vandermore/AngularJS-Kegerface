'use strict';

/* Controllers */

function KegListController($scope, $http) {
    $http.get('dataStore/kegs.json').success( function ( data ) {
        $scope.kegs = data;
        //This just limits the data to the first 3 kegs, but it's not the preferred way to lazy load. Since this isn't lazy at all!
//        $scope.kegs = data.splice(0, 3);
    });
    
    $scope.orderProp = 'name';
}