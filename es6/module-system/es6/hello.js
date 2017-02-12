'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/*
Node.js 가 아직 export을 지원하지 않는다.
 */

var asia = function asia() {
	console.log('Hello Asia');
};
var korea = exports.korea = asia;
var world = exports.world = function world() {
	console.log('Hello World');
};