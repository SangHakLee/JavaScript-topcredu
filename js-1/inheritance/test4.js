/* Java
class Gildong extends Korean{}
 */

function Korean() {
	this.a = 1;
}

function Gildong() {
	this.b = 2;
}

/*
JS 의 상속
Gildong.prototype.__proto__ -> Korean.prototype
 */
Gildong.prototype = new Korean(); // 상속
/* Gildong.prototype = new Korean() 과정
1. {} 만들고
2. Korean() 생성자 처리 {a:1}
3. 상속 처리 {a:1, __proto__: Korean.prototype}
4. 객체 할당 Gildong.prototype = {a.1, __proto__: Korean.prototype}   Gildong.prototype을 재할당
   Gildong.prototype 이 {a.1, __proto__: Korean.prototype} 로 바뀌면서
   Gildong.prototype -> Korean.prototype (__proto__)
 */


var g = new Gildong();
/* var g = new Gildong() 과정
1. {} 만들고
2. Gildong() 생성자 처리 {b:2}
3. 상속 처리 {b:2, __proto__: Gildong.prototype}
4. 객체 할당 var g = {b:2, __proto__: Gildong.prototype}
 */


console.log(g); // 부모인 객체의 값은 __proto__로 히든이기 때문에 여기선 안 나온다.
console.log(g.a); // Gildong에 없어서 부모 찾는다.


console.log(g.__proto__); // g의 부모가 누구냐


console.log(g.__proto__.__proto__); // Korean의 부모 즉 g의 할아버지는? 아직 없다. {}
Korean.prototype.print = function() {
	console.log('I am Korean');
}
console.log(g.__proto__.__proto__); // 이 시점엔 생긴다. 위에서 Korean.prototype.print 를 만들었기 때문에
g.print(); // 사실 여기의 print 는 Korean의 print이다.


Gildong.prototype.print = function() {
	console.log('I am Gildong');
}
g.print(); // 여기의 print 는 Gildong의 print이다. Korean까지 찾아갈 필요가 없다 Gildong에 있기 때문에. 메소드 오버라이딩


Gildong.prototype.printValue = function() {
	// JS의 this 는 가변적. 호출자
	// 호출자 : g   this.b 는 g.b
	console.log('value b : ', this.b );
}
g.printValue(); // 함수 호출
