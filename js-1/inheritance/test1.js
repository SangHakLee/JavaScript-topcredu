/*
JS core에 다음과 같이 있다.
Object() {

}

Function() {

}
*/

// 13. Inheritance Diagram

// 모든 함수는 자동으로 hidden 프로퍼티 prototype 이 있다.
var log = console.log;

log( Object.getOwnPropertyNames(Function.prototype) );
log( Array.isArray(Function.prototype) ); // false  Function.prototype 는 객체


function a() {

}
a.prototype.num = 7; // 객체가 만들어진 후에 프로퍼티를 넣는다. Java에선 안됨!!
log( typeof a.prototype ); // object
log( a.prototype ); // { num: 7 }

log( a.prototype.constructor === a ); // a의 prototype 객체의 constructor 는 a를 가르킨다 fu
log( a.prototype.constructor ); // [Function: a]

log( a.prototype.__proto__ === Object.prototype) // true Function.prototype -> __proto__
log( a.prototype.__proto__ ) // {}

log( Object.__proto__ === Function.prototype) // true function Object -> Function.prototype

log ( Function.__proto__ === Function.prototype); // true function Function() -> Function.prototype


log('---------------');

// 생성자 함수는 관례로 대문자 시작
// new Foo();
function Foo() {

}
log( Foo.prototype ); // {}  foo 선언과 동시에 prototype 이 생긴다.
log( Foo.prototype.__proto__ === Object.prototype ); // true  Foo.prototype -> Object.prototype (__proto__)
log( Foo.__proto__ === Function.prototype) // true function Object() -> Function.prototype (__proto__)

Function.prototype.say = function () {
	log('Hi')
}

// Foo 한테는 say 가 없지만 부모인 Function의 prototype에 say가 있기 때문에 사용가능
Foo.say();

log('---------------');

var f1 = new Foo();
var f2 = new Foo();

log( f1.__proto__ === Foo.prototype ); // true  f1 -> Foo.prototype (__proto__)
log( f2.__proto__ === Foo.prototype ); // true  f2 -> Foo.prototype (__proto__)

// 가능하지만 중복된다.
// f1.talk = function() {
// 	log('talking');
// }
// f2.talk = function() {
// 	log('talking');
// }
// f1.talk();
// f2.talk();

// 상속 사용
Foo.prototype.talk = function() {
	log('talking');
}
f1.talk(); // f1 자체는 talk 가 없지만, 부모인 Foo의 talk를 사용할 수 있다.
f2.talk();
// f1에 먼저 talk 찾고 f1에 없다면
// 부모인 Foo 에서 찾고 Foo에 없다면
// 부모인 Object 에서 찾고
// Object 없으면 Object.prototype 의 부모인 null을 리턴
// f1 -> Foo.prototype -> Object.prototype -> null

log('---------------')

var o1 = new Object();
var o2 = new Object();

log( o1.__proto__ === Object.prototype ); // true o1 -> Object.prototype (__proto__)

log('---------------')

function Boo() {
	var a = 1;
	var x = function() {
		log('x');
	};

	this.b = 2;
	this.c = function() {
		log('c');
	}
}

var boo = new Boo(); // 함수 Boo 를 생성자로 사용
// 1. 	{} 빈 객체 만듬
// 2. 	Boo 함수 처리
// 2-2. this.b = 2    {b:2}
// 2-3. this.c = ...  {b:2, c:[Function]}
// 3. 	지역 변수 boo 에 {b:2, c:[Function]} 넣는다.
log(boo);

// 그러나 Boo 함수의 문제는
// 보통 변수(this.b)는 잘 변경되지만, 함수(this.c)는 잘 안 변경된다.
// 그래서 아래와 같이 두개를 만들면 c 함수는 계속 생기고 메모리 낭비가 된다. c는 잘 안 변경되지 않지만 계속 만들고 있는 것이다.
var boo1 = new Boo();
var boo2 = new Boo();
Boo.prototype.c = function(){
	// 이렇게 Boo의 prototype 함수로 사용하는 것이 좋다 부모를 상속하기 때문에
}
