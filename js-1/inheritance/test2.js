
var log = console.log;

function Foo() {
	return 1;
}

function foo() {
	return 2;
}

// JS 는 대소문자를 구분 X
log( Foo() );
log( foo() );


var F = new Foo();
var f = new foo();

// 소문자든 대문자든 상관없지만, 관습적으로 생성자는 대문자로 시작한다.
log( F );
log( f );
