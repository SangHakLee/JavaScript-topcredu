'use strict';

// var 키워드로 선언한 변수는 function scoped variable 이다.
// 유독 JS 만이 블록연산자 스코프 변수라는 개념이 없었다.
var a = 1; // 전역 접근 가능
console.log('a = ' + a);
(function some() {
	console.log('a = ' + a);
	var b = 2; // 함수안에서 접근 가능
	console.log('b = ' + b);
	if (true) {
		console.log('b = ' + b);
		var c = 3;
		console.log('c = ' + c);
	}
	console.log('c = ' + c); // 접근 가능!
})();
// console.log('b = '+b); // 에러
// console.log('c = '+c); // 에러
// #출력결과
// a = 1
// a = 1
// b = 2
// b = 2
// c = 3
// c = 3