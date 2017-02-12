var obj = {
    val: 0,
    add: function(a) {
        this.val = this.val + a;
        return this.val;
    }
};

console.log(obj.add(1)); // 1

console.log('----------');

global.val = 10;

var add = obj.add;
console.log(add(1)); // 11

console.log('----------');

console.log(add.call(obj, 1)); // 2
console.log(add.apply(obj, [1])); // 3

console.log('----------');

var obj2 = {
    val: 0,
    add: function(a) {
        this.val = this.val + a;
        return this.val;
    }
};


// bind : 파라미터로 받은 대상을 this로 고정한 함수를 리턴
var add2 = obj2.add.bind(obj2);
/*
bind(요기) this를 요기로 고정시킨다.
가변적이기 때문에
만약 bind가 없으면 obj2가 아니고 add가 this가 된다.
 */
console.log(add2(1)); // 1


var obj3 = {val:100};
var add3 = obj2.add.bind(obj3); // val:100 을 넣어준다.
/*
this 는 {val:100}
 */

console.log(add3(1));
