var log = console.log;

if ([]) {
    log(true);
} else {
    log(false);
}

log({} ? true : false);

var name = '';
if (name) {
    log(true);
} else {
    log(false);
}

log(name.length ? true : false);

if (!!-1 == true) { // 숫자는 0 or NaN 일때 false
    console.log('work though');
}

if (-1) {
    console.log('work better');
}


var a = -1;
a = true;
a = {};

log( typeof -1 );
log( typeof (!-1) );
log( typeof (!!-1) ); // boolean 캐스팅

a = -1;
var b = Boolean(a); // boolean 캐스팅, 명시적
log(typeof b);
