/* Controllers */

function KegListController($scope, Kegerator) {
   "use strict";
    
    $scope.kegs = Kegerator.query();
    $scope.orderProp = 'name';
}

function LovibondController( $scope, $http ) {
    $http.get('dataStore/srmLovibond.json').success( function ( data ) {
        $scope.srmLovibondRanges = data;
    });

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
        
        return '#000000';
    };
    
}