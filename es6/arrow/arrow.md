https://github.com/anirudh-modi/JS-essentials/tree/master/ES2015

With ES6, apart from the regular function expression came a new function expression, which can be used
to decalre a function, known as the arrow function expression. Apart, from the syntax being different,, an
arrow function behaves pretty differently as compared to the traditional functions :
1. The this is lexically binded, which means they are always binded to the closest context they are
declared in.
1. These are always anonymous functions ie., they can never have a name.
	- 언제나 익명함수
1. They don't have the [[Construct]] function, hence, they cannot be treated as constructor function, and
these functions cannot be called using the new operator.
	- new 생성자로 사용할 수 없다. 이름이 없어서
1. They do not have any prototype property.
	- 함수지만, prototype이 없다
1. Arrow functions does not provide with an arguments object of its own, so which means to access
extra values passed to the arrow function, we need to rely on the rest parameters.
	- arguments 도 없다. 반드시 파라미터가 필요하면 명시해야 한다.
1. Their cant be any duplicate name in the parameters, during the declaration of the arrow function.
1. The value of this cannot be changed, during the execution of the arrow function or within the code.
	- `this`가 binding 되면 변경되지 않는다. 가변적이지 않다. 고정적
