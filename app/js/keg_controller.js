/* Controllers */

function KegListController($scope, $http) {
   "use strict";

    $http.get('dataStore/kegs.json').success( function ( data ) {
        $scope.kegs = data;
        $scope.orderProp = 'name';
    });

    $http.get('dataStore/srmLovibond.json').success( function ( data ) {
        $scope.srmLovibondRanges = data;
    });

    
//    kegerfaceApp.controller('KegListController', function KegListController($scope, $routeParams) {
//        $scope.foo = $routeParams.foo;
//    });
}

//function LovibondController( $scope, $http ) {
//    "use strict";
//    
//    $http.get('dataStore/srmLovibond.json').success( function ( data ) {
//        $scope.srmLovibond = data;
//    });
//}