function log(data) {
    console.log(data);
}

function foo() {
    return arguments;
}

log(foo(1, 2, 3));
// { '0': 1, '1': 2, '2': 3 }

function changeToArray() {
    var args = Array.prototype.slice.call(arguments);
    return args;
}
log(changeToArray(1, 2, 3));
// [ 1, 2, 3 ]

function myConcat(seperator) {
    var args = Array.prototype.slice.call(arguments, 1); // 인덱스 1 부터 slice 한다.
    return args.join(seperator);
}
log(myConcat(", ", "red", "orange", "blue")); // 첫 파라미터는 seperator 다.
//red, orange, blue
log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
//elephant; giraffe; lion; cheetah
