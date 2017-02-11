/*
test3-1을 기본 함수로 만든 것.
x+y 부분이 중복된다.
 */

var add5 = function(y) {
    var x = 5;
    return x + y;
};
var add10 = function(y) {
    var x = 10;
    return x + y;
};
console.log(add5(2)); // 7
console.log(add10(2)); // 12
