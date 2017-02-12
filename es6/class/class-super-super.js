// 1. 클래스 표현식
let Korean = class {
    constructor(a) {
        // new 키워드로 새로 만들어지는 객체에 추가된다.
        this.a = a;
    }
    // 메소드는 prototype 객체에 추가된다.
    printA() {
        console.log('a = ' + this.a);
    }
    // 정적메소드는 함수객체에 추가된다.
    static say() {
        console.log('Hello ' + this.a);
    }
};
// 2. 클래스 선언
class HongFamily extends Korean {
    constructor(a, b) {
        super(a);
        this.b = b;
        // return this;
    }
    printB() {
        console.log('b = ' + this.b);
    }
    fetchB() {
        return this.b;
    }
    // getter, setter 메소드는 일반적으로 메소드명을 중복해서 선언한다.
    get bValue() { // set bValue 이름이 같지만 다른 것으로 인식
        return this.b;
    }
    set bValue(b) {
        this.b = b;
    }
}
class Gildong extends HongFamily {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
        // return this;
    }
    printC() {
        console.log('c = ' + this.c);
    }
}
let gildong = new Gildong(1, 2, 3);
let log = console.log;
log(gildong); // Gildong { a: 1, b: 2, c: 3 }
log(gildong.__proto__ === Gildong.prototype); // true
log(Object.getOwnPropertyNames(Gildong.prototype)); // [ 'constructor', 'printC' ]
gildong.printC(); // c = 3
log(Gildong.prototype.__proto__ === HongFamily.prototype); // true
log(Object.getOwnPropertyNames(HongFamily.prototype)); // [ 'constructor','printB']
gildong.printB(); // b = 2
log(HongFamily.prototype.__proto__ === Korean.prototype); // true
log(Object.getOwnPropertyNames(Korean.prototype)); // [ 'constructor', 'printA' ]
gildong.printA(); // a = 1
log('------------------------');
Korean.say(); // Hello undefined
Korean.say.call(gildong); // Hello 1
log('------------------------');
log(gildong.fetchB()); // 2

// getter, setter 는 괄호연산자 없이 사용한다.
log(gildong.bValue); // 2 getter
gildong.bValue = 999; // setter
log(gildong.bValue); // 999
