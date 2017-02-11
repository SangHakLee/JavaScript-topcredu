/*
모듈 패턴
 */
var Counter = (function() {
    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }

	// 이 아래 프로퍼티들만 접근할 수 있다.
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }
})(); // 즉시실행.  Counter 함수는 return 부분을 가지고 있다.

console.log(Counter.value()); //0
Counter.increment();
Counter.increment();

console.log(Counter.value()); //2

Counter.decrement();
console.log(Counter.value()); //1
