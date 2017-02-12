/*
delete
Object vs Array
 */
var obj = {a:1, b:2};
console.log(obj);
delete obj.a;
console.log(obj);

var nums = ['1', '2', '3'];
console.log(nums);
delete nums[0];
console.log(nums); // [ , '2', '3' ]  완전히 지워진게 아니다 shift 할 것

console.log('----------------------');

var log = console.log;
var fruits = ['1', '2', '3', '4'];
log(fruits); // [ '1', '2', '3', '4' ]

log('~~~~~~~~~~~~~~~~~~~~~~~overwrite by index');
fruits[0] = "Kiwi";
log(fruits); // [ 'Kiwi', '2', '3', '4' ]

log('~~~~~~~~~~~~~~~~~~~~~~~push by index');
var size = fruits.length;
log(size); // 4
fruits[size] = "Kiwi"; // equals as "fruits.push('Kiwi')"
log(fruits); // [ 'Kiwi', '2', '3', '4', 'Kiwi' ]

log('~~~~~~~~~~~~~~~~~~~~~~~delete');
delete fruits[0];
// 항목을 제거하는 것이 아니라 undefined 로 바꾼다.
// 객체 프로퍼티는 삭제되므로 배열과 행동방식이 다르다.
log(fruits); // [ , '2', '3', '4', 'Kiwi' ]

log('~~~~~~~~~~~~~~~~~~~~~~~');
fruits = ['1', '2', '3', '4']; // reset

log('~~~~~~~~~~~~~~~~~~~~~~~splice: 특정 항목 제거 및 삽입');
// splice(시작위치 index, 제거개수)
fruits.splice(fruits.length - 1, 1); // = pop
log(fruits); // [ '1', '2', '3' ]

// splice(시작위치 index, 제거개수, 추가항목...)
fruits.splice(2, 0, "Lemon", "Kiwi"); // 제거 수가 0 이고 뒤에 더 있다면 그것을 넣어줌
log(fruits); // [ '1', '2', 'Lemon', 'Kiwi', '3' ]
fruits.splice(0, 1);
log(fruits); // [ '2', 'Lemon', 'Kiwi', '3' ]
