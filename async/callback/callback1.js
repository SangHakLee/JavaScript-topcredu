setTimeout(function (){
	console.log('1');
	setTimeout(function (){
		console.log('2');
		setTimeout(function (){
			console.log('3');
		}, 1);
		console.log('4');
	}, 1);
	console.log('5');
}, 1);

// 비동기는 callback 함수를 큐로 보낸다.
// 비동기 함수 자체의 시간이 아무리 작게 걸려도 큐에 넣는다.
