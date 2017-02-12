function Korean() {
	this.a = 1;
}

function Gildong() {
	this.b = 2;
}

Gildong.prototype = new Korean(); // 상속
/*
1. {}  생성
2. {a:1}
3. {a:1, __proto__: Korean.prototype}
4. Gildong.prototype = {a:1, __proto__: Korean.prototype}

 */

var g = new Gildong();

for (var prop in g) {
	if (g.hasOwnProperty(prop)) { // g가 직접 가진 프로퍼티냐?
		console.log('me >> ', prop);
	} else {
		console.log('parent >> ', prop);
	}
}
