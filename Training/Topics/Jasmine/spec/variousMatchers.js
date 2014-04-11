/**
 * @author Alok Guha
 */
describe("Various types of matchers", function () {
    it("The 'toBe' matcher compares with ===", function () {
        var a = 12;
        var b = a;
        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });

    it("The 'toEqual' matcher", function () {
        var a = 12;
        expect(a).toEqual(12);
    });

    it("The 'toMatch' matcher is for regular expressions", function () {
        var message = 'synerzip google quickoffice';
        expect(message).toMatch(/synerzip/);
        expect(message).toMatch('google');
        expect(message).not.toMatch(/QO/);
    });

    it("The 'toBeDefined' matcher compares against `undefined`", function () {
        var a = {
            name:'alok'
        };
        expect(a.name).toBeDefined();
        expect(a.bar).not.toBeDefined();
    });

    it("The `toBeUndefined` matcher compares against `undefined`", function () {
        var a = {
            foo:'foo'
        };

        expect(a.foo).not.toBeUndefined();
        expect(a.bar).toBeUndefined();
    });

    it("The 'toBeNull' matcher compares against null", function () {
        var a = null;
        var foo = 'foo';

        expect(null).toBeNull();
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
    });

    it("The 'toBeTruthy' matcher is for boolean casting testing", function () {
        var a, foo = 'foo';

        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });

    it("The 'toBeFalsy' matcher is for boolean casting testing", function () {
        var a, foo = 'foo';

        expect(a).toBeFalsy();
        expect(foo).not.toBeFalsy();
    });

    it("The 'toContain' matcher is for finding an item in an Array", function () {
        var a = ['foo', 'bar', 'baz'];

        expect(a).toContain('bar');
        expect(a).not.toContain('quux');
    });
});