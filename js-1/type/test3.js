var log = console.log;

var a = 1;
var b = a; // a 가 갖고 있는 값을 복사해 b 에 담는다.
a = 2;
log(b); // 원시타입인 경우 변수는 값을 담는 그릇이다.

var c = {num:1};
var d = c; // c 가 가리키는 객체를 d 도 가리키게 한다.
c = {num:2}; // 새로 만든 객체를 c 가 가리킨다.
log(d);

var e = {num:1};
var f = e;
e.count = 2;
log(f); // e 와 f 가 같은 객체를 가리키고 있다.
