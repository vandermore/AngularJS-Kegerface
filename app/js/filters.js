angular.module('kegerfaceFilters', []).filter('lovibondColor', function() {
    return function( input ) {
        return "#FF0000";
    };
});