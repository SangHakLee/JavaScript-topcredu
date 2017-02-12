var log = console.log;

function Korean() {
    this.hobby = 'dance';
}
Korean.prototype.food = 'kimchi';

function Hong() {
    Korean.call(this);
    // 생성자 호출 시 this 는 hong 이다.
    // hong 을 Korean 함수를 call(호출)하면서 넘겨주면
    // Korean 함수에 정의된 this 속성을 hong 이 가리키는
    // 새 객체에 복사해 넣는다.
}

var hong = new Hong();
log(hong);
