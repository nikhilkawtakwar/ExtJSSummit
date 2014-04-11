/**
 * @author Alok Guha
 * @param a
 * @param b
 */
var addition = function (a, b) {
        if (a && b  && typeof(a)!=='object' && typeof(b)!=='object') {
            return a + b;
        }
        else {
            return undefined;
        }
    };