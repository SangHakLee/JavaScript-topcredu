class Cat {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}
// The super keyword is used to call functions on an object's parent.
class Lion extends Cat {
    speak() {
        super.speak(); // 부모의 speak
        console.log(this.name + ' roars.');
    }
}
var log = console.log;
// extends
log(Lion.prototype.__proto__ === Cat.prototype); // true
// Lion.prototype = Object.create(Cat.prototype);
log(Object.getOwnPropertyNames(Lion.prototype));
// [ 'constructor', 'speak' ]
var lion = new Lion('leo');
log(lion.name);
// leo
lion.speak();
// leo makes a noise.
// leo roars.
