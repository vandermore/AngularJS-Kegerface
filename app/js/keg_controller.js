'use strict';

/* Controllers */

function KegListController($scope, $http) {
    $http.get('kegs/kegs.json').success( function ( data ) {
        $scope.kegs = data;
    });
    
    $scope.orderProp = 'name';
}