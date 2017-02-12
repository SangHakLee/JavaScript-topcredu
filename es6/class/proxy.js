// Multiple Inheritance with Proxies
// 여러 객체를 한 곳에 모아서 사용할 때 쓴다.


let transmitter = {
    transmit() {
        console.log('transmit() called');
    }
};
let receiver = {
    receive() {
        console.log('receive() called');
    }
};
// Create a proxy object that intercepts property accesses
// and forwards to each parent, returning the first defined value it finds
let inheritsFromMultiple = new Proxy([transmitter, receiver], {
    get: function(proxyTarget, propertyKey) {
        // console.log(proxyTarget);
        // [ { transmit: [Function: transmit] },{ receive: [Function: receive] } ]
        // console.log(propertyKey);
        // transmit
        const foundParent = proxyTarget.find(parent => parent[propertyKey] !== undefined);
        // console.log(foundParent);
        // { transmit: [Function: transmit] }
        // console.log('>>'+(foundParent && foundParent[propertyKey]));
        // >>transmit() {console.log('transmit() called');}
        return foundParent && foundParent[propertyKey];
    }
});

// inheritsFromMultiple 는 transmitter 와 receiver 의 프로퍼티를 모두 사용할 수 있다
inheritsFromMultiple.transmit(); // transmit() called
inheritsFromMultiple.receive(); // receive() called

console.log(Array.isArray(inheritsFromMultiple)); // true
console.log(inheritsFromMultiple instanceof Array); // true
