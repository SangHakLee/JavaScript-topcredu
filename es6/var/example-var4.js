var a = 1;
let b = 1;

(function some() {
    var a = 2; // 다른 변수
    let b = 2; // 다른 변수

    if (true) {
        var a = 3; // 변수 재선언!
        let b = 3; // 다른 변수
        console.log('a = ' + a); // 3
        console.log('b = ' + b); // 3
    }
	
    console.log('a = ' + a); // 3 (재선언 변수 사용)
    console.log('b = ' + b); // 2
})();

console.log('a = ' + a); // 1
console.log('b = ' + b); // 1
