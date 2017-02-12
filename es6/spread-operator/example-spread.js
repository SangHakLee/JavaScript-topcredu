//----------------------
// #spread operator
function add(a, b) {
    return a + b;
}
let data = [1, 2];

// 배열 요소를 직접 하나씩 구해서 파라미터로 전달한다.
console.log(add(data[0], data[1])); // 3

// apply 메소드의 두번째 파라미터로 배열을 전달하면서
// 함수 add 를 호출한다.
console.log(add.apply(null, data)); // 3

// 스프레드 연산자 ...를 사용한다. 배여을 쪼개서 넘긴다
// 1, 2 로 치환한 다음 add 함수를 호출한다.
console.log(add(...data)); // 3
/* Java : Varargs   0~n 개 받겠다
int add(int... args) {

}
 */

console.log('----------------------');


//---------------
// #다른 사용예
let array1 = [2, 3, 4];

// 배열 array1 을 분해해서 array2 에 넣는다.
let array2 = [1, ...array1, 5];
console.log(array2); // [ 1, 2, 3, 4, 5 ]


console.log('----------------------');


//---------------
// #다른 사용예
array1 = [1, 2];
array2 = [3, 4];

// 두 배열을 붙인다.
let array3 = array1.concat(array2);

console.log(array1); // [ 1, 2 ]
console.log(array2); // [ 3, 4 ]
console.log(array3); // [ 1, 2, 3, 4 ]
array1.push(array2);
console.log(array1); // [ 1, 2, [ 3, 4 ] ]

// reset
array1 = [1, 2];
array2 = [3, 4];
array1.push(...array2);
console.log(array1); // [ 1, 2, 3, 4 ]


console.log('----------------------');


//-----------------------
// #rest parameter
// 파라미터 자리에 쓰이면 스프레드 연산자란 용어 대신
// 레스트 파라미터라고 부른다.
function subtract(a, b) {
    return a - b;
}

function calc(a, ...args) {
    console.log(Array.isArray(args)); // true
    console.log(args); // [ 1, 2, 3 ]
    switch (a) {
        case '+':
            return add(...args); // 1, 2, 3 하나씩 조개서 넘긴다
        case '-':
            return subtract(...args);
        default:
            return 0;
    }
}


console.log(calc('+', 1, 2, 3)); // 3
console.log(calc('-', 1, 2, 3)); // -1
