var counter = 0;

// JS 범위 효력을 갖는 스코프는 global, function 이 있다.

function add() {
    counter += 1;
}
add();
add();
add();
console.log('counter: ' + counter);
// 여기서 문제점은 add 함수를 호출하지 않고도 counter 를 직접 접근할 수 있다는 점이다


// 조건문의 {} 는 스코프의 영향을 갖지 않는다.
if (true) {
	var a = 1;
}


var b = 2;
function aa() {
	b = 3;
}
console.log('a :', a)
console.log('b :', b)
