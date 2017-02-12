var array = [1, 2, 3, 4, 5];
array.forEach(function(v, i) {
    if (v === 3) {
        console.log(v + ":" + i); // 3:2
    }
});
console.log('----------------array vs object')
var obj = {
    a: 1,
    b: {
        num: 777
    },
    c: function() {
        console.log('c() called.');
    }
};
for (var prop in obj) {
    console.log(typeof obj[prop]);
    switch (typeof obj[prop]) {
        case 'function':
            obj[prop]();
            break;
        case 'object':
            console.log(Object.keys(obj[prop]));
            break;
        case 'number':
            console.log(obj[prop]);
            break;
        default:
    }
}
