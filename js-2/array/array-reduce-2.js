var a = [1, 2, 3, 4, 5];
// Array.reduce(cb)
var b = a.reduce(function(x, y) { // 처음에 1,2
    console.log(x + "," + y);
	// return 이 없으면 undefined 가 리텀
});
console.log('b = ' + b);

console.log('~~~~~~~~~~~~~~~~~~~~~~~');
var a = [1, 2, 3, 4, 5];
// Array.reduce(cb)
var b = a.reduce(function(x, y) {
    console.log(x + "," + y);
    return y;
});
console.log('b = ' + b);

console.log('~~~~~~~~~~~~~~~~~~~~~~~');
var a = [1, 2, 3, 4, 5];
// Array.reduce(cb, initValue)
var b = a.reduce(function(x, y) {
    console.log(x + "," + y);
    return y;
}, 0);
console.log('b = ' + b);

console.log('~~~~~~~~~~~~~~~~~~~~~~~');
// 일치하는 단어의 개수를 파악하고자 한다.
var a = ["a", "b", "c", "d", "e", "a", "b", "a", "c", "c", "c"];
// Array.reduce(cb, initValue)
var b = a.reduce(function(x, y) { // {}, "a"
    x[y] = ++x[y] || 1;  // x[y] 가 존재하지 않으니 1로 할당
	// x.a = 1;  {"a":1}
	// x.b = 1;  {"a":1,"b":1}

    console.log(JSON.stringify(x));
    return x;
}, {}); // 두번 째로 {} 빈 객체.      seed 값 = 처음에 사용할 값
console.log(b);
