function log(data) {
    console.log(data);
}

var pattern = /h/gi;
log(typeof pattern); //object

log(pattern.__proto__ === RegExp.prototype);
log(RegExp.prototype.__proto__ === Object.prototype);

log('--------------------------');

log(pattern.test("Happy")); //true
pattern = /h/g;
log(pattern.test("HAPPY")); //false

log('--------------------------');

var idExp = /^[a-z][a-z0-9]{3,4}[a-z]$/;
// ^[a-z] : 영문으로 시작
// [a-z0-9]{3,4} 영문과 숫자조합, 3 자 이상 4 자 이하
// [a-z]$ : 영문으로 끝
log(idExp.test("1234"));
log(idExp.test("i1234"));
log(idExp.test("i1234n"));
log(idExp.test("i12345n"));
log(idExp.test("a123m"));

log('--------------------------');

var passwordExp = /^[0-9]{2,3}$/;
// ^[0-9] : 숫자로 시작
// [0-9]{2,3}$ : 숫자로 끝, 2 자이상 3 자 이하
log(passwordExp.test("1"));
log(passwordExp.test("12"));
log(passwordExp.test("123"));
log(passwordExp.test("1234"));
log(passwordExp.test("12m"));
