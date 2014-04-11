/**
 * @author Alok Guha
 */
describe('Test cases for ++ unary operator', function () {
    var foo;
    //executes before each spec
    beforeEach(function () {
        foo = 0;
    });
    //executes after each spec
    afterEach(function () {
        foo = undefined;
    });

    it('should increment a variable', function () {
        foo++;
        expect(foo).toBe(1);
    });
});



