// 호이스팅
Start(); // 대문자로 시작하는 함수, 결과: 3

// dead code 밑에서 start 다시 선언했기 때문에
function start() {
    console.log(1);
}

start(); // 소문자로 시작하는 함수, 결과: 2

function start() { // 함수의 재 정의
    console.log(2);
}

start(); // 소문자로 시작하는 함수, 결과: 2

function Start() {
    var number = 1;
    var Number = 3;
    console.log(Number);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~');


(function() {
	// 변수 부분만 호이스팅된다.
    // 다른 랭귀지에서는 에러가 발생하지만 자바스크립트는 에러가 발생하지 않는다.
    console.log(x); // undefined
    var x = 100;
    console.log(x); // 100
})();

// 위 함수의 코드를 컴파일러가 아래 함수의 코드처럼 처리한다.
(function() {
    // 컴파일러가 변수 선언부를 호이스팅해서 처리한다.
    var x;
    console.log(x); // undefined
    x = 100;
    console.log(x); // 100
})();
