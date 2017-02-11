/*
Java - int 형을 리턴하는 함수
int add(int a, int b) {
	return a + b;
}
 */


// JS 는 언제나 Object를 리턴하기 때문에 명시하지 않는다.
function add(a, b) {
	return a + b;
}

function add2(a, b) {
	log(a+b); // return 키워드가 없다면 undefined 를 리턴. undefined 도 Object 다
}

// log 변수가 더 밑에서 쓰였는데, 어떻게 add2() 에서 log()를 썼을까?
// 호이스팅
var log = console.log;

log( add(1,2) );
log( add2(1,2) );

function multi(a, b) {
	return {
		a: a,
		b: b
	}

	// 아래 코드는 es6에서 { a: 1, b: 2 } 로 자동 변환
	return {a, b};
}

log( multi(1,2) );


function test() {
	return {

	}

	// 아래 코드처럼 return 하면 안된다.
	// 컴파일러가 ;이 없으면 자동으로 붙인다. 그래서 return; 로 자동 변환
	return
	{

	}
}

log( test() );
