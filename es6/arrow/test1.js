var obj = {
    a: 'object',
    foo: () => {
        console.log(this.a) // global 로 간다 함수가 없기 때문에
    },
    print: function() {
        console.log(this.a);
    }
};
obj.foo(); // undefined
obj.print(); // object


var obj = {
    a: 'object',
    foo: function() {
        return (() => {
            console.log(this.a)
        })();
    }
};
obj.foo(); // object


// obj 가 왜 저렇게 바뀌었나 중간 과정
var obj2 = {
    a: 'hello',
    foo: function () {
      return () => { // this 가 foo 함수를 사용하라고 다시 묶은 것
          console.log(this.a);
      };
    },
    print: function() {
        console.log(this.a);
    }
};

obj2.foo()(); // obj 에선 즉시실행으로 () 하나를 지웠다.
