var log = console.log;
var points = [40, 100, 1, 5, 25, 10];
log(points); // [ 40, 100, 1, 5, 25, 10 ]

log('~~~~~~~~~~~~~~~~~~~~~~~sort as string');
points.sort();
// 항목을 문자열로 변경해서 정렬한다. 원하는 결과가 아니다.
log(points); // [ 1, 10, 100, 25, 40, 5 ]

log('~~~~~~~~~~~~~~~~~~~~~~~');
points = [40, 100, 1, 5, 25, 10]; // reset

log('~~~~~~~~~~~~~~~~~~~~~~~sort as number order asc');
// 비교함수를 사용한다.
points.sort(function(a, b) {
    return a > b
});
log(points); // [ 1, 5, 10, 25, 40, 100 ]

log('~~~~~~~~~~~~~~~~~~~~~~~');
points = [40, 100, 1, 5, 25, 10]; // reset

log('~~~~~~~~~~~~~~~~~~~~~~~sort as number order desc');
points.sort(function(a, b) {
    return a < b
});
log(points); // [ 100, 40, 25, 10, 5, 1 ]

log('~~~~~~~~~~~~~~~~~~~~~~~');
points = [40, 100, 1, 5, 25, 10]; // reset

log('~~~~~~~~~~~~~~~~~~~~~~~find highest');
points.sort(function(a, b) {
    return a < b
});
log(points[0]); // 100

log('~~~~~~~~~~~~~~~~~~~~~~~');
points = [40, 100, 1, 5, 25, 10]; // reset

log('~~~~~~~~~~~~~~~~~~~~~~~find lowest');
var ascComparator = function(a, b) {
    return a > b
};
log(points.sort(ascComparator)[0]);
