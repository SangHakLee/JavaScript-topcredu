function Korean() {

	// 함수 내부 로직
	var msg = 'Korean Called';
	console.log(msg);

	// 새로 만들어지는 객체에 프로퍼티를 추가
	this.color = 'white';
	this.play = function() {
		console.log('dancing');
	}
}

/*
1. {} 빈 객체 생성
2. new 생성자 함수 호출. { color: 'white', play: [Function] }
3. 상속 연결 { color: 'white', play: [Function], __proto__: Korean.prototype }
4. k 에 할당
 */
var k = new Korean();
console.log(k);
