/*
Java : ->
JS	 : =>

그래서 뚱뚱한 화살표   fat-arrow
 */

var foo = function() { // es5
	return 0;
}


var foo1 = () => {return 1;} // without any parameters
var foo2 = a => {return a*2;} // with single parameter
var foo3 = (a,b) => {return a+b;} // with muliplte parameter
console.log(foo1()); // 1
console.log(foo2(2)); // 4
console.log(foo3(3, 4)); // 7


var bar = () => 777; // 코드블럭( {} ) 이 없으면 자동으로 return
console.log( bar() );
