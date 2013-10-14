/* Services */
var kegerfaceServices = angular.module('kegerfaceServices', ['ngResource']);

/* Information on each beer is gotten from this service. */
kegerfaceServices.factory('Kegerator', ['$resource',
										function($resource){
											return $resource('dataStore/kegs.json', {}, {
												query: {method:'GET', params:{name:'name'}, isArray:true}
											});
										}]);

/* Information about SRM and Lovibond scale information is gotten here. Information pulled from Wikipaedia. */
kegerfaceServices.factory('Lovibond', ['$resource',
									   function($resource){
										   return $resource('dataStore/srmLovibond.json', {}, {
											   query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
										   });
									   }]);

//    $http.get('dataStore/kegs.json').success( function ( data ) {
//        $scope.kegs = data;
//        $scope.orderProp = 'name';
//    });
//
//    $http.get('dataStore/srmLovibond.json').success( function ( data ) {
//        $scope.srmLovibondRanges = data;
//    });
//
