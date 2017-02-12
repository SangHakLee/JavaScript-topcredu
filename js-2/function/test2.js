function Member(name, age, gender) {
    this.name = name || undefined;
    this.age = age || 0;
    this.gender = gender || 'female';
    if (!name) {
        return 'unknown';
    } else {
        return name;
    }
}

var a = Member; // 변수 a 가 함수 Member 를 가리킨다.
console.log(a); // [Function: Member]

var b = Member(); // 함수를 실행해서 결과를 리턴한다. 리턴결과를 변수 b 가 가리킨다.
console.log(b); // unknown

var c = new Member; // 생성자로 사용하면 괄호를 자동으로 붙여서 처리한다.
console.log(c); // { name: undefined, age: 0, gender: 'female' }

var d = new Member();
console.log(d); // { name: undefined, age: 0, gender: 'female' }

var e = new Member('chris', 33, 'male'); // 정상적인 사용법이다.
console.log(e); // { name: 'chris', age: 33, gender: 'male' }
console.log(c === d); // false, 새로 만들어지는 객체는 언제나 메모리 주소가 다르다. singleton
console.log(JSON.stringify(c) === JSON.stringify(d)); // true, 객체가 갖고 있는 값만을 비교한다.

function isEquivalent(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}
console.log(isEquivalent(c, d)); // true, 보다 정확한 값 비교 함수를 사용한다.
