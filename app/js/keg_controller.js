/* Controllers */

var kegerfaceController = angular.module( 'kegerfaceController', [] );
var lovibondController = angular.module( 'lovibondController', [] );

kegerfaceController.controller( 'KegListController', ['$scope', 'Kegerator',
													  function($scope, Kegerator ) {
														  $scope.kegs = Kegerator.query();
														  $scope.orderProp = 'name';
													  }]);

lovibondController.controller( 'LovibondListController', ['$scope', 'Lovibond',
													  function( $scope, Lovibond ) {
															$scope.srmLovibondRanges = Lovibond.query();
															$scope.lovibondUIColor = function ( lbColor ) {
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
													  }]);