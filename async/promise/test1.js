var fs = require('fs');


// promise 객체를 만든 것.  B : 오래 걸리는 처리로직
var promise = new Promise(function(resolve, reject) {
    fs.readFile(__dirname+'/data.txt', 'utf-8', function(error, data) {
        if (error) {
            return reject(error);
        }
        resolve(data);
    });
});

// A : 기다리기 싫은 로직
promise.then(function(result) { // then 하나면 1파라미터: 성공    2파라미터: 실패
    console.log(result);
}, function(error) {
    console.log(error.message);
});
