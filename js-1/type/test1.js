function log(data) {
    console.log(data);
}
log(typeof 7 === 'number');
log(typeof 3.14 === 'number');
log(typeof Infinity === 'number'); // Infinity 예약어. 무한대
log(typeof - Infinity === 'number');
log(typeof NaN === 'number');

// "" 와 '' 는 같다. 그러나 ''를 추천. 회사 내부에 따라 맞출 것.
log(typeof '' === 'string');
log(typeof 'bla' === 'string');

log(typeof true === 'boolean');
log(typeof false === 'boolean');
log(typeof undefined === 'undefined');
log(typeof blabla === 'undefined'); // 예약어에 없으면 변수구나. 그런데 선언만 하고 값이 없기 때문에 undefined. null 아님

var a = null;
log(typeof a !== 'null');
log(typeof a === 'object'); // null 로 바꾸자는 일부 개발자의 의견은 거절되었다!. null의 부모는 object 이기 때문에
log(a === null); // null 체크시 typeof 연산자를 사용하지 말고 비교연산자를 사용하자!

log(typeof {a:1} === 'object');
log(typeof [1, 2, 4] === 'object'); // 배열도 객체다!
log(typeof new Date() === 'object');
log(typeof null === 'object'); // null 도 객체다!
log(Array.isArray([1, 2, 4])); // 배열은 isArray 메소드로 체크하자!
// Array 도 사실 함수다. function Array(){//...};
// es6 에선 함수의 프로퍼티를 static 으로 표현.

var sym = Symbol("foo"); // 새로 추가됨. new 쓰면 에러. Symbol("여기는 주석같은 개념"). 객체를 만들어 주니 그냥 써라(new 하지 말고)
log(typeof sym === 'symbol');

log(typeof function(){} === 'function'); // 익명함수 !!이건 함수!!
log(typeof Math.random === 'function'); // Math를 객체로 보고 그 안에 있는 random 매소드 !!이건 매소드!!

log(Number.parseInt === parseInt); // 짧게 parseInt 함수를 사용할 수 있는 이유, 슈가코드! short cut
log(typeof parseInt('3.14', 10) === 'number'); // 리턴 결과의 타입을 비교

// 상속 관계
log(function(){} instanceof Function); // Function.prototype 객체의 프로퍼티를 이용할 수 있다.
log(function(){} instanceof Object); // Ojbect.prototype 객체의 프로퍼티를 이용할 수 있다.
