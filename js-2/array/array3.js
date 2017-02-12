/*
slice 복제
Java 의 deep copy
 */

var log = console.log;
var numsArray = ["1", "2"];
var strsArray = ["a", "b", "c"];
var resultArray = numsArray.concat(strsArray);
log(resultArray); // [ '1', '2', 'a', 'b', 'c' ]

log('~~~~~~~~~~~~~~~~~~~~~~~slice');
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]

// 인덱스 1 부터 잘라서 새로운 배열을 만든다.
// 파라미터를 주지 않으면 똑 같은 값을 갖는 새 배열을 만들어 할당한다.
var citrus = fruits.slice(1);
log(citrus); // [ 'Orange', 'Lemon', 'Apple', 'Mango' ]

log('~~~~~~~~~~~~~~~~~~~~~~~indexOf');
fruits = ["Banana", "Orange", "Apple", "Mango"];
log(fruits.indexOf("Apple")); // 2
fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];

// 인덱스 4 번째 자리부터 찾는다.
log(fruits.indexOf("Apple", 4)); // 6
fruits = [
{id: 1, name: "Banana"},
{id: 2, name: "Orange"},
{id: 3, name: "Apple"}];
var target = fruits[1];
log(target); // { id: 2, name: 'Orange' }
log(fruits.indexOf(target)); // 1
