/*
int add(int a, int b) {
	return a + b;
}

int add(int a, double b) {
	return a + b;
}
*/

// JS 의 파라미터는 optional 하다.
function add() {
    var sum = 0;
	console.log(Array.isArray(arguments)); // arguments 는 객체이다.
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
// function add() { // 이 함수는 위 함수를 재정의 한다. 오버로딩 개념이 없다.
// 	return 0;
// }

/*
JS 에서 함수에서 넘기는 파라미터에 형표시가 없는건 어차피 다 객체이기 때문이다.
 */

function add2(a, b) {
    return a + b;
}

function add3(a, b, c) {
    return a + b + c;
}

function log(data) {
    console.log(data);
}
log('add: ' + add(1, 2)); //3
log('add: ' + add(1, 2, 3)); //6
log('add2: ' + add2(1, 2)); //3
log('add3: ' + add3(1, 2, 3)); //6
log('add3: ' + add3(1, 2, 3, 4)); //6
