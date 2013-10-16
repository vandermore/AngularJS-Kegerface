/* Controllers */

var kegerfaceController = angular.module( 'kegerfaceController', [] );
var lovibondController = angular.module( 'lovibondController', [] );

kegerfaceController.controller( 'KegListController', ['$scope', 'Kegerator',
													  function($scope, Kegerator ) {
														  var kegs, orderProp; //Creating these here to serve as AngularJS models.
														  kegs = Kegerator.query();
														  orderProp = 'name';
														  
														  $scope.kegs = kegs;
														  $scope.orderProp = orderProp;
													  }]);

lovibondController.controller( 'LovibondListController', ['$scope', 'Lovibond',
													  function( $scope, Lovibond ) {
														  var srmLovibondRanges, lovibondUIColor; //Creating these here to serve as AngularJS models.
														  srmLovibondRanges = Lovibond.query();
														  
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
														  $scope.lovibondUIColor = lovibondUIColor;
														  
														  //TODO:: Look into doing a $watch here instead of having the lbColor passed in.
													  }]);