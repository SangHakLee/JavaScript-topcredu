function log(data) {
    console.log(data);
}
log(123 == '123'); // 앞의 123을 컴파일러가 '123' 으로 만든 후 비교
log(123 === '123');
log('-----------------------------');

var x;
log(typeof x === 'null');
log(x == null); // 조심해야 할 것!! 캐스팅하기 때문에
log(x === null);
log(x === undefined);
log('-----------------------------');

log(isNaN(0 / 0) === true);
log(3 / 0 === Infinity); // Java의 더블형을 0으로 나눈것도 유사 Infinity
log(-3 / 0 === -Infinity);
log(Infinity === +Infinity);
log(Infinity === -Infinity);
log(+Infinity === -Infinity);
