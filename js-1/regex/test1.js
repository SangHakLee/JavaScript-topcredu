function log(data) {
    console.log(data);
}

log('hello world'.replace('world', 'javascript'));
log('Blue has a blue house and a blue car'.replace('blue', 'red')); // blue를 찾아 red로 바꾼다.
log('Blue has a blue house and a blue car'.replace(/blue/g, 'red')); // /정규표현식/옵션  /g 는 global
log('Blue has a blue house and a blue car'.replace(/blue/gi, 'red'));// /i insensitive 대소문자 구분 X
log('Blue has a blue house and a blue car'
    .replace(/blue|house|car/gi, function myFunction(x) {
        return x.toUpperCase();
    })); // | 는 or
log('hello'.replace(/h/, 'b'));
log('hello'.replace(/h../, 'bbb')); // . 은 한 글자     h를 찾고 .. 두개로 hel를 찾는다.
