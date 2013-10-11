describe('Kegerface controllers', function() {

	describe('KegListController', function() {
        var scope, ctrl, $httpBackend;
        
        //Note for those learning AngularJS:
        // Angular's injector will ignore the leading and trailing underscores in the signature ( i.e. _$httpBackend_ ).
        // This allows us to inject a service, but then attach that service to a variable with the
        // same name as the service.
        // (See the AngularJS tutorial docs for more details about what is going on here:
        //    http://docs.angularjs.org/tutorial/step_05 )
        
        beforeEach( inject( function( _$httpBackend_, $rootScope, $controller ) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET( 'kegs/kegs.json' ).
                respond( [{name: 'Beer Name'}, {name: 'Beer Name 2'}] );

            scope = $rootScope.$new();
            ctrl = $controller( 'KegListController', {$scope: scope} );
        }));

        it('should create "kegs" model with 2 beers fetched from xhr', function() {
          expect(scope.kegs).toBeUndefined();
          $httpBackend.flush();
    
          expect(scope.kegs).toEqual([{name: 'Beer Name'},
                                       {name: 'Beer Name 2'}]);
        });
    
    
        it('should set the default value of orderProp model', function() {
          expect(scope.orderProp).toBe('name');
        });

    });
});
