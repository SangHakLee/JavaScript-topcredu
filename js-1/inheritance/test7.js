var obj1 = new Object();
var obj2 = Object.create(null);

console.log( obj1.toString() ); //

/*
.create(null) 이기 때문에 부모가 없다.

Java는 항상 부모가 있다. 최상위 Class 인 Object
JS 는 부모가 없을 수 있다.

아예 상속이 필요없는 객체인 경우 메모리 관점에서 부모가 없는 객체를 만든다.
 */
console.log( obj2.toString() ); // Error
