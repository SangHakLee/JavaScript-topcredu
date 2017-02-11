function makeFunc() {
    var name = "chris";

    function displayName() {
        console.log(name);
    }
    return displayName;
}
var myFunc = makeFunc();
myFunc();
