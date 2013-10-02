describe('Kegerface controllers', function() {

	describe('KegListController', function() {
		it('should create a "kegs" model with 5 kegs', function() {
			var scope = {},
				ctrl = new KegListController( scope );
			expect( scope.kegs.length ).toBe(5);
		});
	});
});
