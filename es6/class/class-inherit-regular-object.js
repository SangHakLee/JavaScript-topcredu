var Animal = {
    speak() {
        console.log(this.name + ' makes a noise.');
    }
};
class Dog {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' barks.');
    }
}
// Note that classes cannot extend regular (non-constructible) objects.
// If you want to inherit from a regular object,
// you can instead use Object.setPrototypeOf()
Object.setPrototypeOf(Dog.prototype, Animal); // 부모를 class가 아닌 객체로 하는 방법
log(Dog.prototype.__proto__ === Animal); // true
var d = new Dog('Jindo');
d.speak();
var log = console.log;
log(Object.getOwnPropertyNames(d)); // [ 'name' ]
log(Object.getOwnPropertyNames(Dog.prototype)); // [ 'constructor', 'speak' ]
log(Object.getOwnPropertyNames(Animal)); // [ 'speak' ]
