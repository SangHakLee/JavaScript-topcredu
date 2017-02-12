function Person(name, age) {
    var name = name; // private 의미. 내부에서만 쓰고 생성자로 만들면 접근 못함
    this.age = age; // public 의미
    this.getName = function() {
        return name;
    }
}
var foo = new Person('foo', 26);
console.log(foo.age); // 26
console.log(foo.name); // undefined
console.log(foo.getName()); // foo
