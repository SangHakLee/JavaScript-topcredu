var obj = {};
obj.value = 10;
obj.addValues = function(additionalValues) { // method

	/*
	arguments 는 배열이 아니다.
	프로퍼티 이름이 '0', '1', '2' 이런식으로 간다.
	 */
	console.log( 'arguments : ', arguments ); // { '0': 20 }
    for (var i = 0; i < arguments.length; i++) {
        this.value += arguments[i];
    }
    return this.value;
};

// this : 함수가 호출될 때 함수를 소유헤서 호출한 자
// context : 관련있는 멤버들을 관리하고 연결을 통제하는 관리자
console.log(obj.addValues(20)); // addValues의 this 는 obj
console.log('obj.value: ' + obj.value);


console.log('~~~~~~~~~~~~~~~~~~~~~~~');

/*
global(전역) 객체
node에선 global
브라우저에선 window
*/
global.value = 0;
var f = obj.addValues; // function   addValues만 뽑아낸건

f(20); // 호출자를 찾아봤더니 없다. f(20) 이기 때문에   호출자가 없으면 global scope 에서 호출한 것

console.log('global.value: ' + global.value); // 20   0 + 20
console.log('obj.value: ' + obj.value);
/*
똑같은 함수를 사용했는데 함수의 호출자에 따라서 this가 달라진다.
이렇기 때문에 결과 값이 달라진다.
 */


console.log('~~~~~~~~~~~~~~~~~~~~~~~');
/*
!!!! 그래서 call, apply 를 사용해서 호출자를 정해준다. !!!!
 */

f.call(obj, 30); // this를 obj로 명확하게 준다. global 객체가 아니다.

console.log('global.value: ' + global.value);
console.log('obj.value: ' + obj.value);
