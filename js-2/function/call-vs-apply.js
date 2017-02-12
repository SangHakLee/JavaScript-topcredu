function print(name, profession) {
    console.log('name: ' + name + ', profession: ' + profession);
}
print('John', 'fireman'); // name: John, profession: fireman


/*
Function.prototype.apply = function(this, Array) {

}

apply(호출자, 파라미터 배열)
함수.apply();
 */
print.apply(undefined, ['Susan', 'school teacher']); // name: Susan, profession: school teacher
// 넘기는 파라미터가 배열일때 apply 쓰면 자동으로 apply에서 배열 split 하기 때문에 이렇게 사용한다.



/*
Function.prototype.call = function(this, ..., ...) {

}

call(호출자, 파라미터 열거형)
함수.call();
 */
print.call(undefined, 'Claude', 'mathematician'); // name: Claude, profession: mathematician

/*
 * apply 함수를 사용해야 할 때
 * if you don't know the number of arguments
 * or if they are already in an array.
 */
