//--------------------------------------------------------
// 함수가 파라미터를 못 받는 경우 대신 기본값을 사용하고자 한다.
function add(x, y) {
    return x + y;
}
console.log(add()); // NaN


function add2(x, y) {
    x = x || 0;
    y = y || 0;
    return x + y;
}
console.log(add2()); // 0


// 파라미터를 받지 못하면 대신 기본값을 사용한다.
function add3(x = 0, y = 0) { // 조건 할당. 디폴트 값
    return x + y;
}
console.log(add3()); // 0


function add4(x = 0, y = 0, z = x + y) {
    return z;
}
console.log(add4()); // 0
console.log(add4(1, 2)); // 3
console.log(add4(1, 2, 999)); // 999
