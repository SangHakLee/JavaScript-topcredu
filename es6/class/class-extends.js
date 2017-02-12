class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}
class Dog extends Animal {
	// 생성자 생략 가능
	// Animal.call(this) // es5 way
    speak() {
        console.log(this.name + ' barks.');
    }
}

var d = new Dog('Jindo');
d.speak(); // Jindo barks.

console.log(JSON.stringify(d)); // {"name":"Jindo"}

// Dog의 speak
console.log(Object.getOwnPropertyNames(d.__proto__)); // [ 'constructor', 'speak' ]

// Animal의 speak
console.log(Object.getOwnPropertyNames(d.__proto__.__proto__)); // [ 'constructor', 'speak' ]

// babel --presets latest class-extends.js -d build
