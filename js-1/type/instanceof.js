/*
instanceof 연산자로 대상의 부모가 누구인지 알 수 있다.
부모의 prototype 객체의 프로퍼티를 파악하고 사용할 때 이용한다.
*/
var log = console.log;

function a(num){
var num = num || 0;
}

a.numbers = [1, 2, 3];
a.names = ['a', 'b'];

log(a);
log(a instanceof Function); // true
log(a.__proto__ === Function.prototype); // true. Function.prototype이 부모
// Function 의 prototype 객체가 갖고 있는 메소드를 사용할 수 있다.

log(a instanceof Object); // true. 아래의 비교를 줄인 방식
log(Function.prototype.__proto__ === Object.prototype); // true
// Object 의 prototype 객체가 갖고 있는 메소드를 사용할 수 있다.

/*
a instanceof Something 결과가 true 라면
a 는 Something 의 prototype 객체의 메소드를 사용할 수 있다.
8
*/
log('-------------------------------');
log(Object.getOwnPropertyNames(Function.prototype)); // 프로퍼티 이름을 얻는다.
/*
[ 'length',
'name',
'arguments',
'caller',
'apply',
'bind',
'call',
'toString',
'constructor' ]
*/

// The length property specifies the number of arguments expected by the function.
log(a.length); // 1
/*
함수 a 는 함수이면서 객체다.
따라서 객체가 이용할 수 있는 프로퍼티를 .점 표기법으로 이용할 수 있다.
a.length 프로퍼티는 arguments 가 받은 파라미터의 개수를 알려준다.
*/

log('-------------------------------');
log(Object.getOwnPropertyNames(Object.prototype));
/*
[ 'hasOwnProperty',
'constructor',
'toString',
'toLocaleString',
'valueOf',
'isPrototypeOf',
'propertyIsEnumerable',
'__defineGetter__',
'__lookupGetter__',
'__defineSetter__',
'__lookupSetter__',
'__proto__' ]
*/

log(a.hasOwnProperty('num')); // false // 자신의 것이 아니기 때문에
log(a.hasOwnProperty('numbers')); // true

log('-------------------------------');

/*
함수가 객체관점에서 정의한 메소드는 자바의 static 메소드와 비슷하다.
다른 객체의 static 메소드는 Object.keys(객체) 형태로 사용한다.
*/
// returns an array of a given object's own enumerable properties
log(Object.keys(a)); // [ 'numbers', 'names' ]
log(Object.keys(a.numbers)); // [ '0', '1', '2' ]
log(Object.keys(a.names)); // [ '0', '1' ]

log('-------------------------------');

log(a instanceof Function); // true
// 위 코드는 아래 코드와 의미가 같다.
log(a.__proto__ === Function.prototype); // true
log(a instanceof Object); // true
// 위 코드는 아래 코드와 의미가 같다.
log(a.__proto__.__proto__ === Object.prototype); // true
