/**
 * array1.reduce(callbackfn[, initialValue])
 * 배열의 모든 요소에 대해 지정된 콜백을 호출한다.
 * 콜백 함수의 반환 값은 결과에 누적되며 다음에 콜백 함수를 호출할 때 인수로 제공된다.
 * 최종 반환 값은 콜백 함수에 대한 마지막 호출로부터 누적된 결과다.
 * callbackfn
 * 필수 요소. 최대 4 개까지 인수를 허용하는 함수다.
 * initialValue
 * 선택 사항. initialValue 가 지정된 경우 누적을 시작하는 초기 값으로 사용된다.
 * callbackfn 함수에 대한 첫 번째 호출은 이 값을 배열 값 대신 인수로 제공한다.
 */
function appendCurrent(previousValue, currentValue) {
    return previousValue + ':' + currentValue;
}
var elements = ['abc', 'def', 123, 456];
var result = elements.reduce(appendCurrent, 'initialValue');
console.log(result);

console.log('~~~~~~~~~~~~~~~~~~~~~~');

function addDigitValue(previousValue, currentDigit, currentIndex, array) {
    console.log(previousValue + ',' + currentDigit + ',' + currentIndex + ',[' + array + ']');
    var exponent = (array.length - 1) - currentIndex;
    console.log('exponent: ' + exponent);
    var digitValue = currentDigit * Math.pow(10, exponent);
    console.log('Math.pow(10, exponent): ' + Math.pow(10, exponent));
    console.log('return: ' + (previousValue + digitValue));
    return previousValue + digitValue;
}
var digits = [4, 1, 2, 5];
var result = digits.reduce(addDigitValue, 0);
console.log(result);
