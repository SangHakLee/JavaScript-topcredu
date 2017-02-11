
// 선언식
function sum1(a, b) {
    return a + b;
}

// 표현식
var sum = function(a, b) {
    return a + b;
}

Function.prototype.curry = function() {
    var slice = Array.prototype.slice;
    var args = slice.apply(arguments); //[5] 배열로 만든다
    var that = this; //that --> sum    이 함수를 누가 호출했냐 sum
    return function() {

		// 여기서 만약에 return this.~~ 로 했으면, global 객체를 가르킨다. 호출자가 없기 때문에
		// sum5 를 호출한게 없기 때문에 console.log(sum5(7)); 만약 arr.sum5(7) 이었다면, this는 arr이된다.
		// 즉 this는 가변적이기 때문에 이와 같이 한다.
        return that.apply(null, args.concat(slice.apply(arguments)));
        //sum.apply(null, args.concat([7]);
    };
}

// apply : 호출자를 전달하면서 함수를 전달하겠다.

var sum5 = sum.curry(5);

// 아래 두개의 결과는 같다.
// 그러나, sum5는 로직을 바꿀 수 있다.
console.log(sum5(7));
console.log(sum(5, 7));

// call : 호출자를 주면서 호출. null 이면 호출자를 주지 않는 경우. 파라미터를 열거형으로 준다.
// apply : 파라미터를 배열로 준다
console.log(sum.call(null, 5, 7));

console.log('----------------');

var numbers = [1,2];
console.log( sum( numbers[0], numbers[1]) );
console.log( sum.apply(null, numbers) ); // 배열을 바로 전달한다. 호출자는 필요없기 때문에 null

// call, apply 사용이유 : 1.호출자 = 작업대상을 전달해준다. 2.파라미터를 배열로 전달해서 알아서 자르게 하고 싶다
