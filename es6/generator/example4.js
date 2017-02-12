// 배열을 size 만큼 잘라서 배열에 담는다.
// 작업결과를 모은 하나의 배열을 리턴한다.
function split(array, size) {
    var newArray = [];
    for (var i = 0; i < array.length; i += size) {
        newArray.push(array.slice(i, i + size)); // 하나의 배열을 3개씩 잘라 넣어서 리턴
    }
    return newArray; // 자르고 모아서 리턴.  3번 짜르고 나서 리넡
}

// 루프가 돌때마다 결과를 리턴한다.
function* split2(array, size) {
    for (var i = 0; i < array.length; i += size) {
        yield array.slice(i, i + size); // 한번 잘라서 리턴. 자를 때마다 리턴 3번 리턴
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(split(array, 3)); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]

let iter = split2(array, 3); // 이터레이터 리턴
console.log(iter.next()); // { value: [ 1, 2, 3 ], done: false }
console.log(iter.next()); // { value: [ 4, 5, 6 ], done: false }
console.log(iter.next()); // { value: [ 7, 8 ], done: false }
console.log(iter.next()); // { value: undefined, done: true }

// for-of 문을 사용하면 필요한 만큼 처리되서 편리하다.
// 위에서 .next() 사용을 안해도 된다.
for (var value of split2(array, 3)) {
    console.log(value);
}
// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 7, 8 ]



// generator 사용이유
// split 이 3초  걸리면 3초 기다려야함 for 문에서 만약 10초 걸리면
// split2 은 한 번 해결하면 바로 리턴
//
// 만약 루프가 10초 거릴면 10초 동안 아무것도 못하고 있어야함
// generator 는 루프문에서 리턴하기 때문에 다음 로직 수행가능
//
// JS 가 싱글쓰레드이기 때문에 루프에서 오래 걸리면 모든 작업 멈춘다.
