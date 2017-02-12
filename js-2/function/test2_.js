var a = {num:7};
var b = {num:7};

console.log( a === b ); // 동일비교, 메모리 관점
console.log( JSON.stringify(a) === JSON.stringify(b) ); // 동등비교, 값의 관점

console.log( a.toString() );
console.log( JSON.stringify(a) );


console.log( a.num ); // 7
console.log( a['num'] ); // 7

var prop = 'num';
console.log( a[prop] ); // 7 
