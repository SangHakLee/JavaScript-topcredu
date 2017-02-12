function log(text) {
    console.log(text);
}

/*
1. {} 생성. new Shape() 이기 때문에 호출자는 {} 빈 객체
2. this 처리
3. shape 에 {....} 할당
 */

function Shape() {
    this.height = 10;
    this.width = 10;
    this.area = function() {
        return this.height * this.width;
    };
};

var shape = new Shape();
log(shape.area()); // 100
log(shape.hasOwnProperty('area')); // true
log(shape.toString()); // "[object Object]";
log(shape.hasOwnProperty('toString')); // false
log(shape.__proto__ === Shape.prototype); // true
log(Shape.prototype.hasOwnProperty('toString')); // false
log(Shape.prototype.__proto__ === Object.prototype); // true
log(Object.prototype.hasOwnProperty('toString')); // true
