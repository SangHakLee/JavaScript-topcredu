// * 기호를 붙이면 제너레이터 함수가 된다.
// the first call of next executes from the start of the function
// until the first yield statement

/*
 제너레이터 함수는 호출하면 return 이 아니고 이터레이터를 준다.
 */
function* idMaker() {
    var index = 0;
    while (index < 3) {
		// yield : 중간 리턴, 리턴하고 다시 코드 수행 가능
        // 3 번 양보한다.
        yield index++; // 중간 return. 다시 돌아오는 point
    }
}
// 이터레이터를 받는다.
var gen = idMaker();

// next 함수로 idMaker 함수를 실행한다.
// .next() 와 value 는 예약어
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined

console.log('--------------------');

function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}
var gen = generator(10);
console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
console.log('--------------------');

function* logGenerator() {
    console.log(yield); // pretzel
    console.log(yield); // california
    console.log(yield); // mayonnaise
}
var gen = logGenerator();
gen.next();
gen.next('pretzel');
gen.next('california');
gen.next('mayonnaise');
