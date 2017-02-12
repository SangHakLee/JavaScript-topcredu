class Cat {
    constructor(state = {}, props = {}) {
        console.log('Cat > constructor() called.');
        this.state = state;
        this.props = props;
    }
    static speak() { // static prototype에 들어가지 않는다.
        console.log('makes a noise.')
    }
}
class Lion extends Cat {
    // constructor 함수를 명시하지 않아도
    // super()를 호출하는 생성자가 있는 것과 같다.
    constructor() {
        // Cat.call(this);
        super();
        console.log('Lion > constructor() called.');
    }
}

var lion = new Lion();
// Cat > constructor() called.
// Lion > constructor() called.

console.log(JSON.stringify(lion));
// {"state":{},"props":{}}

Cat.speak();
// makes a noise.
