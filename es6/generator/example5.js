var arr = [3, 5, 7];
arr.foo = "hello";
console.log(arr); // [ 3, 5, 7, foo: 'hello' ]
console.log(arr.length); // 3  foo 제외
console.log(JSON.stringify(arr)); // [3,5,7]
console.log(Object.getOwnPropertyNames(arr)); // [ '0', '1', '2', 'length', 'foo' ]

console.log('-----------------');

// for-in 구문
// 객체에서 열거할 수 있는 프로퍼티를 대상으로 루프 처리를 한다.
// An enumerable property can be included in and visited during for..in loops
for (var i in arr) {
    console.log(i);
}
// 0
// 1
// 2
// foo

console.log('-----------------');

// for-of 구문
// 배열은 자체에 이터레이터가 있다.
// 이터레이터가 리턴하는 값을 사용해서 루프 처리를 한다.
for (var i of arr) {
    console.log(i);
}
// 3
// 5
// 7

console.log('-----------------');

// forEach is an method that is available only in Array objects.
// It allows you to iterate through elements of an array.
// The callback can access both index and value of the array elements.
arr.forEach((value, index) => console.log(index + ':' + value));
// 0:3
// 1:5
// 2:7
