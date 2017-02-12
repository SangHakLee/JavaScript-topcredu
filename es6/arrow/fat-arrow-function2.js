// returns:2
// because there is no block statment, hence JS implicit `return`
var fn = a => a*2; // return 이 자동 붙음. 범위 연산자가 없기 때문에
console.log(fn(1));


// returns:undefined
// because there is a block statment,and JS depends on explicit `return`
var fn = a => {a*2}; // return 안 붙음. 범위 연산자가 있는데 return 문을 안 썼기 떄문에
console.log(fn(1));


// returns:2
// because there is a block statment,and we are explicitly returning
var fn = a => {return a*2};
console.log(fn(1));


// returns:{id:1}
// because there is no curly braces,
// but parantheses, which is considered as expression,
// hence it implicitly `return` a the object
var fn = a => ({id:a}); // () 괄호로 막았기 떄문에 객체로 생각해서 코드 블럭이 없다고 판단해서 return 붙여줌
console.log(fn(1));
