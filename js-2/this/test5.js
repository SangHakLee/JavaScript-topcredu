function F(v) {
    this.val = v;
}

var f = new F("constructor");

// 생성자 함수를 호출할 때 생성자 함수 내부의 this 는 새로 생성된 객체를 참조한다.
// f의 호출자는 없지만 new로 생성하면 새로 생성된 객체가 호출자의 역할을 한다.
console.log(f.val); //constructor
