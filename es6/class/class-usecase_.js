"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

// ES6 의 class 문법
// 1. constructor 함수안에서 this 키워드로 선언된 변수는
// new 키워드로 만들어지는 객체의 프로퍼티가 된다.
// 2. 함수들은 생성자.prototype 객체에 메소드로 추가된다.
// 과거에는 생성자 함수를 선언한 후 생성자.prototype 객체에 메소드를 추가했었다.
// 추가로 getter, setter 역할의 메소드를 정의해서 사용할 수 있다.
// 3. 함수앞에 static 키워드를 붙이면 함수객체에 메소드로 추가된다
var Polygon = function() {
    // Property write only
    function Polygon(height, width) {
        _classCallCheck(this, Polygon);

        // 생성자명은 항상 constructor
        this.height = height;
        this.width = width;
    }

    _createClass(Polygon, [{
        key: "calcArea",
        value: function calcArea() {
            // 함수 축약   calcArea: function(){}
            return this.height * this.width;
        }
    }, {
        key: "area",
        get: function get() {
            // get 키워드는  함수를 프로퍼티처럼 사용 () 괄호 없이
            return this.calcArea();
        }
    }]);

    return Polygon;
}();

var square = new Polygon(10, 10);

console.log(JSON.stringify(square)); // {"height":10,"width":10}
console.log(square.area); // 100
console.log(square.calcArea()); // 100
console.log(square.height); // 10
console.log(square.width); // 10
// babel --presets latest class-usecase.js -d build
