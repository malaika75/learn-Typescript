function greeting(askname) {
    console.log("hello greet");
    askname();
}
function askname() {
    console.log("enter your name");
}
greeting(askname);
//console.log (askname)
function cell(samsung) {
    console.log("".concat(samsung, " is best indroid mobile campany"));
}
function brand(mobiles, callback) {
    console.log("yes you are right");
    callback(mobiles);
}
brand("samsung", cell);
function atendence(studentName) {
    console.log("".concat(studentName, " present teacher"));
}
var Names = function (atendence) {
    var studens = ["Ana bella", "Bano qudsiya", "Zara", "Muqeet", "Fariha"];
    studens.forEach(function (studens) {
        atendence(studens);
    });
};
Names(atendence);
function laptop(brands) {
    console.log("".concat(brands, "  brand is outclass"));
}
var start = function (laptop) {
    var arr = ["lenovo", "dell", "hp"];
    arr.forEach(function (arr) {
        laptop(arr);
    });
};
start(laptop);
var friends = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    names.forEach(function (nam) {
        console.log(" hello how are you ".concat(names));
    });
};
friends("afzal", "sashrukh", "maria", "horain", "mona");
var num1 = function (iphone) {
    iphone;
    console.log("".concat(iphone, " 15 pro max"));
};
function num2(num1) {
    console.log("iphone is very expensive");
    num1("iphone");
}
num2(num1);
