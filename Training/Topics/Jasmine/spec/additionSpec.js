/**
 * @author Alok Guha
 */
describe('Unit Tests for blah-blah addition function', function () {
    it('should return undefined if no argument(s) supplied to it.', function () {
        expect(addition()).toBe(undefined);
        expect(addition()).toBeUndefined();
    });
    it('should return undefined if either of argument(s) is supplied as undefined.', function () {
        expect(addition(4)).toBe(undefined);
        expect(addition(4)).toBeUndefined();
    });
    it('should return sum if int or float type arguments are supplied.', function () {
        expect(addition(4, 5)).not.toBeUndefined();
        expect(addition(4, 5)).toBe(9);
        expect(addition(4.5, 5.6)).not.toBeUndefined();
        expect(addition(4.5, 5.6)).toBe(10.1);
    });
    it('should return concatenated string if string type arguments are supplied.', function () {
        expect(addition('QuickOffice', ' Google')).not.toBeUndefined();
        expect(addition('QuickOffice', ' Google')).toBe('QuickOffice Google');
    });

    it('should return undefined if either of argument(s) is supplied as object.', function () {
        var a = {name:'alok', empId:'1'};
        expect(addition(a, 4)).toBe(undefined);
        expect(addition(4, a)).toBeUndefined();
    });
});
