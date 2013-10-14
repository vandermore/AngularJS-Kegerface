/* Services */

angular.module('kegerfaceServices', ['ngResource']).
    factory('Kegerator', function($resource){
        return $resource('dataStore/:kegs.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    }).
    factory('Lovibond', function($resource){
        return $resource('dataStore/:srmLovibond.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    });

//    $http.get('dataStore/kegs.json').success( function ( data ) {
//        $scope.kegs = data;
//        $scope.orderProp = 'name';
//    });
//
//    $http.get('dataStore/srmLovibond.json').success( function ( data ) {
//        $scope.srmLovibondRanges = data;
//    });
//
