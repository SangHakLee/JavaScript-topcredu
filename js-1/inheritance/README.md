## 상속
function Object() 로 상속을 하는게 아니고 Obectio.prototype 을 통해서 상속을 한다.

function Foo() 도 마찬가지로 Foo.prototype 을 통해서 상속을 한다.
Foo.prototype 은 자동으로 생성된다.

Java 라면 f1 -> function Foo() 이지만, JS는 f1 -> Foo.prototype 으로 상속을 한다.
