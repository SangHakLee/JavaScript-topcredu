/*
Java
int [] numbers = {1,2,3};
Object [] objs = {1, 2.0, "hi", new Random();
objs[4] = '';  불가능

List<Object> obj2 = new ArrayList<>();
 */

var log = console.log;

var objs = [1, 2.0, "hi", {}, function(){} ];
objs.push(100);
log(objs);

log('-----------------');

var log = console.log;
var fruits = ['1', '2', '3', '4'];

log(fruits); // [ '1', '2', '3', '4' ]
log(fruits.toString()); // 1,2,3,4

log('~~~~~~~~~~~~~~~~~~~~~~~join : array to string');

log(fruits.join(',')); // 1,2,3,4
log(fruits.join(' ')); // 1 2 3 4

log('~~~~~~~~~~~~~~~~~~~~~~~split : string to array');

var fruitsString = fruits.join(',');
log(typeof fruitsString);
log(fruitsString);
var fruitsArray = fruitsString.split(',');
log(Array.isArray(fruitsArray) ? 'array' : 'not array');
log(fruitsArray);

log('~~~~~~~~~~~~~~~~~~~~~~~pop : get top item and delete');

log(fruits.pop()); // 4
log(fruits); // [ '1', '2', '3' ]

log('~~~~~~~~~~~~~~~~~~~~~~~push');

fruits.push('5');
log(fruits); // [ '1', '2', '3', '5' ]

log('~~~~~~~~~~~~~~~~~~~~~~~shift');

fruits.shift();
log(fruits); // [ '2', '3', '5' ]

log('~~~~~~~~~~~~~~~~~~~~~~~unshift');

fruits.unshift('x');
log(fruits); // [ 'x', '2', '3', '5' ]
