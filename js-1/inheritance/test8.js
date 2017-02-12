function Korean() {
	this.a = 1;
}

function Gildong() {

	Korean.call(this); // 상속 관계가 아니지만, Korean의 this를 사용하고 싶을 때
	// Korean.apply(this); // call 과 하는 일은 같다
	this.b = 2;
}

var g = new Gildong();
/* 상속 관계가 아니지만 다른 객체의 this를 받고 싶으때 사용

1. {}  생성 new 이기 때문에 g 가 호출자
2. Korean.call(this);   Korean을 호출(call을 이용해)
	Korean을 호출하면서 this를 전달
	{a:1}
3. this.b = 2
	{a:1, b:2, __proto__: Gildong.prototype}
 */

console.log( g ); // {a:1, b:2}
console.log( g.a );  // 일반적이라면 g에 a가 없다.
