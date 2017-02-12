var log = console.log;

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

var foo = new Person('foo');
/*
this 는 {}   new 로 만들었기 때문에
{name: 'foo'}
foo = {name: 'foo'}
 */
log(foo.getName()); // foo
// getName 메소드의 호출자는 foo 다.
// foo 가 가리키는 객체에는 프로퍼티 name 이 있다.


log(foo.__proto__ === Person.prototype); // true
log(Person.prototype.getName()); // undefined
// 메소드의 this 는 호출자이므로 getName 메소드 안에서 this 는
// Person.prototype 이 된다.
// Person.prototype 객체 내 name 은 정의되어 있지 않다.


log('~~~~~~~~~~~~~~~~~~~~~~~~~~');


log(Person.prototype.getName.call(foo)); // foo
log(Person.prototype.getName.apply(foo)); // foo
// 호출자를 명시적으로 지정하는 메소드 call 또는 apply 를 쓰면
// 때에 따라 편리하다.
// getName 메소드를 호출한 호출자로 foo 객체를 주고 있다.

log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

Person.prototype.name = 'boo';
log(Person.prototype.getName()); // boo
// Person.prototype 객체에 프로퍼티가 있다면 사용된다.
