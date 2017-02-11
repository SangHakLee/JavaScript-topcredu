function add() {
    var counter = 0;
    counter += 1;
    return counter;
}

console.log('counter: ' + add());
console.log('counter: ' + add());
console.log('counter: ' + add());

/*
counter 변수를 함수안으로 이동하여 add 함수를 호출하지 않고 직접 변수로 접근하는 길을 차단하였다.
이제 counter 는 함수가 갖고 있는 지역변수다.
하지만, 결과가 기대한 것과 다르게 언제나 1 만을 돌려준다. 이는 counter 가 지역변수로써 함수를 호출
할 때 마다 초기화가 이루어져 0 이 되기 때문이다.
*/
