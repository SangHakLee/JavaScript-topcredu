function Korean() {
	this.a = 1;
}

function Gildong() {
	this.b = 2;
}


// Gildong.prototype = new Korean(); // 기본적인 상속
Gildong.prototype = Object.create(Korean.prototype); // 다른 상속 방법
/* new 와 다른점
new 는 새로 만들고 Object.create 는 연결만한다.

1. {}  생성
2. 안함 {}    new 라면 {a:1} 했음
3. {__proto__: Korean.prototype}
4. Gildong.prototype = {__proto__: Korean.prototype}

 */

var g = new Gildong();

console.log(g.b);
console.log(g.a); // new 로 한것이 아니기 때문에 undefined

// 상속관계이긴 하다.
console.log(g.__proto__ === Gildong.prototype); // true
console.log(Gildong.prototype.__proto__ === Korean.prototype); // true
