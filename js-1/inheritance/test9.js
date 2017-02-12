function Animal() {
	// this.say = function() {
	// 	console.log('cry');
	// }
}

Animal.prototype.say = function() {
	console.log('cry');
}


// 함수는 로직이고 변하지 않는다. 그래서 new Cat() 할때마다 계속 생성되면 메모리 낭비다.
function Cat() {
	// this.say = function() {
	// 	console.log('meow');
	// }
}

Cat.prototype = new Animal();

// 따라서 함수는 prototype 객체에 넣는 것이 좋다.
Cat.prototype.say = function() {
	console.log('meow');
}


var c = new Cat();
console.log(c);
c.say();


var c2 = new Cat();
c2.say();



/*
Object.prototype.func = function() {} 하는 이유 알았음

메모리 관점에서 로직은 안 변하기 때문에 생성자 new에서 하지 않는게 좋다
 */
