function log(data) {
    console.log(data);
}

function list(type) {
    var result = "<" + type + "l><li>";

	// (arguments, 1) => index 1부터 시작
    var args = Array.prototype.slice.call(arguments, 1);

    result += args.join("</li><li>");
    result += "</li></" + type + "l>"; // end list
    return result;
}
var listHTML = list("u", "One", "Two", "Three");

log(listHTML); // <ul><li>One</li><li>Two</li><li>Three</li></ul>
