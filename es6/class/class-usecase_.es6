// ES6 의 class 문법
// 1. constructor 함수안에서 this 키워드로 선언된 변수는
// new 키워드로 만들어지는 객체의 프로퍼티가 된다.
// 2. 함수들은 생성자.prototype 객체에 메소드로 추가된다.
// 과거에는 생성자 함수를 선언한 후 생성자.prototype 객체에 메소드를 추가했었다.
// 추가로 getter, setter 역할의 메소드를 정의해서 사용할 수 있다.
// 3. 함수앞에 static 키워드를 붙이면 함수객체에 메소드로 추가된다
class Polygon {
    // Property write only
    constructor(height, width) { // 생성자명은 항상 constructor
        this.height = height;
        this.width = width;
    }
    get area() { // get 키워드는  함수를 프로퍼티처럼 사용 () 괄호 없이
        return this.calcArea();
    }
    calcArea() { // 함수 축약   calcArea: function(){}
        return this.height * this.width;
    }
}
const square = new Polygon(10, 10);

console.log(JSON.stringify(square)); // {"height":10,"width":10}
console.log(square.area); // 100
console.log(square.calcArea()); // 100
console.log(square.height); // 10
console.log(square.width); // 10
// babel --presets latest class-usecase.js -d build
