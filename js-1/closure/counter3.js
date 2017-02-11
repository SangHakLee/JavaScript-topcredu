/*
자바는 클래스 기반 언어로서 메쏘드 단독으로 존재할 수 없다.
JS First Class 특징
함수를 변수에 할당 가능!! 그러므로 파라미터로 전달 가능

Java Lambda
()->System.out.println('hi');
 */

function add() {
    var counter = 0;
    return function() {

		// 이 리턴함수가 함수 밖의 자원(counter)을 사용한다면, add()의 스코프가 끝나도 사용한 자원을 메모리에 유지해준다.
		// 이것이 crosure !!
        counter += 1;
        return counter;
    };
}

// incrementer 는 add 함수의 return 부분을 가지고 있다.
var incrementer = add(); // incrementer 는 함수가 리턴하는 익명함수를 가리킨다.

console.log('counter: ' + incrementer());
console.log('counter: ' + incrementer());
console.log('counter: ' + incrementer());

/*
우선, add 함수를 호출하면 counter 를 증가하는 기능의 함수를 리턴하도록 변경한다.
함수 안에 내장된 익명함수는 함수안에서 외부 스코프에 위치한 변수 counter 를 사용한다.
이 경우 add 함수가 리턴하는 함수는 클로져가 된다. 클로져가 사용하는 변수는 사용하는 함수와 더불어
별도로 메모리에 존재하게 된다.
이제 사용의 오용을 없애기 위한 변수의 직접 접근도 막았고 의도한 대로 잘 작동하는 코드를 얻었다.
 */
