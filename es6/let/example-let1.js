// let 키워드로 변수를 선언하면 범위연산자에 따른 스코프를 갖는다.
// 이제 JS 도 변수의 스코프가 다른 언어와 같아졌다.
let a = 1; // 파일 내 접근 가능
console.log('a = ' + a); // 1
(function some() {
    console.log('a = ' + a); // 1
    let b = 2; // 함수안에서 접근 가능
    console.log('b = ' + b); // 2
    if (true) {
        console.log('b = ' + b); // 2
        let c = 3;
        console.log('c = ' + c); // 3
    }
    // console.log('c = '+c); // 에러, 접근 불가!
})();
