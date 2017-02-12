// test3.js 의 개선

count = 100; // global 객체, 브라우저에선 window

var counter = {
    count: 1,
    func1: function() { //method : 객체가 직접 갖고 있는 함수, func2 func3 는 메소드가 아니다
        this.count += 1; // this 는 counter
        console.log('func1() this.count: ' + this.count); // func1() this.count: 2

		var that = this; // this 가 가변적이 때문에 counter를 this로 가지고 싶어서

        func2 = function() { //function   지역 함수
            that.count += 1;
            console.log('func2() that.count: ' + that.count); // func2() that.count: 101
            func3 = function() { //function
                that.count += 1;
                console.log('func3() that.count: ' + that.count); // func3() that.count: 102
            }
            func3(); // 호출자가 없다. global
        }
        func2(); // 호출자가 없다. global
    }
};

counter.func1();
