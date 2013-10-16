/* Controllers */

var kegerfaceController = angular.module( 'kegerfaceController', [] );

kegerfaceController.controller( 'KegListController', ['$scope', 'Kegerator', 'Lovibond',
													  function($scope, Kegerator, Lovibond ) {
														  var kegs, orderProp, srmLovibondRanges, lovibondUIColor; //Creating these here to serve as AngularJS models.
														  kegs = Kegerator.query();
														  srmLovibondRanges = Lovibond.query();
														  orderProp = 'name';
														  
														  lovibondUIColor = function ( lbColor ) {
																if ( $scope.srmLovibondRanges != undefined ) {
																	for ( var i = 0; i < $scope.srmLovibondRanges.length; i++ ) {
																		if ( parseInt( lbColor ) <= $scope.srmLovibondRanges[ i ].srmLovibond ) {
																			return $scope.srmLovibondRanges[ i ].beerColor;
																		}
																	}
																	
																	//Not under any current Lovibond range, so must be really dark.
																	return $scope.srmLovibondRanges[ $scope.srmLovibondRanges.length - 1 ].beerColor;
																}
																
																return '#0000FF';
															};
														  
														  $scope.srmLovibondRanges = srmLovibondRanges;
														  $scope.lovibondUIColor = lovibondUIColor;	//TODO:: Look into doing a $watch here instead of having the lbColor passed in.
														  $scope.kegs = kegs;
														  $scope.orderProp = orderProp;
													  }]);

//kegerfaceController.filter('lovibondColor', function() {
//	var lovibondColorFilter = function( input, $scope ) {
//		for ( lovibondData in srmLovibondRanges ) {
//			if ( input <= lovibondData.srmLovibond ) {
//				return lovibondData.beerColor;
//			}
//		}
//		return input;
//    };
//	
//	return lovibondColorFilter;
//});