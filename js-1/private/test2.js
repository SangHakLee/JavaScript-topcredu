var makeCounter = function() {
    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }
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
};
var Counter1 = makeCounter(); // 함수 실행시점에 별도의 클로져가 만들어 진다.
var Counter2 = makeCounter(); // 함수 실행시점에 별도의 클로져가 만들어 진다.

console.log(Counter1.value()); //0

Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); //2
console.log(Counter2.value()); //0
