var log = console.log;
var fruits = ['2', '4', '1', '3'];
log(fruits); // [ '2', '4', '1', '3' ]

log('~~~~~~~~~~~~~~~~~~~~~~~sort asc');
fruits.sort();
log(fruits); // [ '1', '2', '3', '4' ]

log('~~~~~~~~~~~~~~~~~~~~~~~');
fruits = ['2', '4', '1', '3']; // reset

log('~~~~~~~~~~~~~~~~~~~~~~~sort desc');
fruits.sort();
fruits.reverse();
log(fruits); // [ '4', '3', '2', '1' ]

log('~~~~~~~~~~~~~~~~~~~~~~~reverse');
fruits.reverse();
log(fruits); // [ '1', '2', '3', '4' ]
