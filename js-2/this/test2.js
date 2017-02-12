count = 100;
var counter = {
    count: 0,
    increment: function() {
        this.count += 1;
    }
};
var inc = counter.increment;
//변수 inc 는 increment 가 가리키는 함수만을 지칭한다.


inc(); // 호출자가 global 이기 때문에 의도와 다른 결과가 나온다.

console.log(counter.count); //0
console.log(count); //101
