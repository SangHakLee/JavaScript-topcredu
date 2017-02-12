// !!!!!!!!!!!!!!!!!!!
// 언제 사용할까?

function bar() {
	this.a = 1 // new   생성할때 만들어질 것들
};
bar.prototype.b = 2 // extends   상속해서 쓸 것들
bar.c = 3  // static   상속과 관계없이 다 쓸 수 있는 static


////////////////////////


global.a = 'global';

function foo() {
	console.log(this.a);
}

foo.a = 'func';
foo(); // global
foo.call(foo); // func


////////////////////////


// The callback function is called from the setTimeout function,
// and the setTimeout function is defined in the global scope,
// which means, that the callback function is called from the global scope.
function foo() {
	setTimeout(function(){
		console.log(this.__proto__); // this 는 global, setTimeout 을 부른게 없기, 때문에
		// Timeout { unref: [Function], ref: [Function], close: [Function] }
		console.log(this.a); // undefined
	},100);
}
foo.a = 'func';
foo.call(foo);

// 문제점 해결 1 bind
function foo() {
	setTimeout((function(){
		console.log(this.__proto__); // [Function] // bind 때문에 this가 고정됨 foo의 this 로
		console.log(this.a); // func   foo.a
	}).bind(this),100); // bind 하면 this만 고정하고 똑같음. this 는 foo
}
foo.a = 'func';
foo.call(foo);

// 문제점 해결 2 arrow
function foo() {
	setTimeout( ()=> { // ()=> 의 입장에서 가장 가까운 scope foo() {} . 그래서 this는 foo 의 this
		console.log(this.__proto__); // [Function]   가장 가까운 this
		console.log(this.a); // func
	},100);
}
foo.a = 'func';
foo.call(foo);


// test1.js 에 설명
////////////////
var obj = {
	a: 'object',
	foo: () => {
		console.log(this.a)
	},
	print: function(){
		console.log(this.a);
	}
};
obj.foo(); // undefined
obj.print(); // object
