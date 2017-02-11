Function.prototype.curry = function() {
    var slice = Array.prototype.slice;
    var args = slice.apply(arguments);
    var that = this; // that -> converter
    console.log('that: ' + that);
    return function() { // milesToKm poundsToKg farenheitToCelsius 함수 실행이 여기를 가르킨다.
        return that.apply(null, args.concat(slice.apply(arguments))); // milesToKm 일 때 'km', 1.60936, undefined, 10
    };
}

// milesToKm 일 때 'km', 1.60936, undefined, 10
function converter(toUnit, factor, offset, input) {
    console.log("t: " + toUnit + ", f: " + factor + ", o: " + offset + ", i: " + input);
    offset = offset || 0;
    return [((offset + input) * factor).toFixed(2), toUnit].join(" ");
}

var milesToKm = converter.curry('km', 1.60936, undefined);
var poundsToKg = converter.curry('kg', 0.45460, undefined);
var farenheitToCelsius = converter.curry('degrees C', 0.5556, -32);
// 이 뒤로 단위 변환 함수를 만들때 converter.curry('degrees C', 0.5556, -32); 와 같이 만들기만 하면 된다.

console.log('------------------------');

console.log(milesToKm(10));
console.log(poundsToKg(2.5));
console.log(farenheitToCelsius(98));
