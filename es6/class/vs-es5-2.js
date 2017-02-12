// Built-in Constructors Can Be Subclassed

// ES5
function D() {
    Array.apply(this, arguments);
}
D.prototype = Object.create(Array.prototype);
var d = new D();
d[0] = 42;
console.log(d instanceof Array); // true
console.log(d.length); // 0 - bad, no array exotic behavior


// ES6
class D extends Array {}
let d = new D();
d[0] = 1;
d[1] = 2;
console.log(d.length); // 2 - good, array exotic behavior
