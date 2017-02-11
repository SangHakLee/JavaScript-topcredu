function makeAdder(x) {
	// x를 로직으로 생각 1번 로직

    return function(y) {
		// y를 로직으로 생각 2 번로직
        return x + y;
    };
}

// 1과 2를 따로 분할 처리한다  커링기법

// add5 와 add10 는 별개

var add5 = makeAdder(5);
var add10 = makeAdder(10);


console.log(add5(2)); // 7
console.log(add10(2)); // 12
