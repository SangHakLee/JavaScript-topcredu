/*
Node.js 가 아직 export을 지원하지 않는다.
 */

var asia = function () {
	console.log('Hello Asia');
};
export let korea = asia;
export let world = function () {
	console.log('Hello World');
};
