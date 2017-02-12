var PI = 3.141592;
console.log('PI = ' + PI);
PI = 3.14;
console.log('PI = ' + PI);
// 변수는 대소문자를 구분한다.
const pi = 3.141592;
console.log('pi = ' + pi);
// pi = 3.14; // error!
// --------------------------
// # 상수 변수에 객체를 할당
const a = {
    name: 'Chris'
};
console.log('a = ' + JSON.stringify(a));
a.name = 'Aaron';
console.log('a = ' + JSON.stringify(a));
// a 는 객체의 주소(참조값)를 가리킨다.
// a 는 상수로 참조값은 변하지 않지만 객체의 프로퍼티는 변경할 수 있다.
