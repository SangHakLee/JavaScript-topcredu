//Static Properties Are Inherited

// ES5
function B() {}
B.f = function() {}; // static 자원

function D() {}
D.prototype = Object.create(B.prototype);
D.f(); // error


// ES6
class B {
    static f() {} //  = B.f = function() {};
}
class D extends B {}
D.f(); // ok
