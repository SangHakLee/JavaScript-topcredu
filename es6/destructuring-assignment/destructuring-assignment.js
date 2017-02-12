//---------------------------------------
// #destructuring assignment(해체 할당)

var log = console.log;
var myObj = {a: 1, b: 2, c: 3};

// 객체.프로퍼티로 접근해서 구한다.
var aa = myObj.a;
var bb = myObj.b;
log('aa = ' + aa); // 1
log('bb = ' + bb); // 2

log('-----------------');

// 객체는 프로퍼티명을 사용하여 해체 할당한다.
var {a, c} = myObj;  // var {a, c} 는 myObj 의 프로퍼티 이름과 같아야한다.
log('a = ' + a); // 1
log('c = ' + c); // 3

log('-----------------');

var array = [1, 2, 3];
// 배열은 인덱스기반으로 해체 할당할 수 있다.
var [x1, , x3] = array;
log('x1 = ' + x1); // 1
log('x3 = ' + x3); // 3
