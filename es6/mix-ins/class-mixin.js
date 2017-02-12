var calculatorMixin = Base => class extends Base { // Base 는 변수
    calc() {
        console.log('calc() called.');
        return this;
    }
};
var randomizerMixin = Base => class extends Base {
    randomize() {
        console.log('randomize() called.');
        return this;
    }
};
console.log(typeof calculatorMixin); // function
console.log(typeof randomizerMixin); // function

console.log('--------------------');

class Person {
    constructor() {
        this.name = 'person';
    }
    printName() {
        console.log(this.name);
    }
}
class Employee extends calculatorMixin(randomizerMixin(Person)) {  // mix-ins Employee -> calculatorMixin -> Person
    constructor() {
        super();
        this.age = '20';
    }
}

var b = new Employee();
console.log(b.__proto__ === Employee.prototype); // true
console.log(Employee.prototype.__proto__ === Person.prototype); // false
console.log(Object.getOwnPropertyNames(Employee.prototype.__proto__));
// [ 'constructor', 'calc' ]
console.log(Object.getOwnPropertyNames(Employee.prototype.__proto__.__proto__));
// [ 'constructor', 'randomize' ]
console.log(Employee.prototype.__proto__.__proto__.__proto__ === Person.prototype);
// true
console.log('--------------------');
console.log(b instanceof Employee); // true
console.log(b instanceof Person); // true
console.log(Employee.prototype instanceof Person); // true
console.log('--------------------');
b.calc(); // calc() called.
b.randomize(); // randomize() called.
console.log(Object.getOwnPropertyNames(b)); // [ 'name', 'age' ]
// babel --presets latest class-mixin.js -d build
