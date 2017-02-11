function log(data) {
    console.log(data);
}

var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
log(Array.isArray(result));
log(result);
//[
// 'Quick Brown Fox Jumps', // 찾은 문자열
// 'Brown', // 캡쳐 1,  괄호() 가 캡쳐 기능을 한다
// 'Jumps', // 캡쳐 2
// index : 4, // 찾은 문자열 시작위치
// input : 'The Quick Brown Fox Jumps Over The Lazy Dog' // 검색 대상 문자열
//]
//
var str = 'For more information, see Chapter 3.4.5.1';
var re = /(chapter \d+(\.\d)*)/i;
var found = str.match(re);
log(found);
//[
// 'Chapter 3.4.5.1',
// 'Chapter 3.4.5.1',
// '.1', //The last value remembered from (\.\d)
// index: 26,
// input: 'For more information, see Chapter 3.4.5.1'
//]

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);
log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

var str = 'That was the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
log(newstr);
// That was the night before Christmas...

var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
log(newstr);
// oranges are round, and oranges are juicy.

var re = /(\w+)\s(\w+)/;  // 단어 공백 단어
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
log(newstr);
// Smith, John

var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);
log(splits);
// [ 'Hello', 'World.', 'How' ]

var myString = 'Hello 1 word. Sentence number 2.';
var splits = myString.split(/(\d)/);
log(splits);
// [ 'Hello ', '1', ' word. Sentence number ', '2', '.' ]

var str = 'abcdefghi';
var strReverse = str
.split('')  // 한 글자씩 자르기
.reverse()  // 배열 반대로
.join('');  // 배열 합치기
// split() returns an array on which reverse() and join() can be applied
log(strReverse);
// ihgfedcba
