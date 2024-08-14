function myname(malaika) {
    return malaika;
}
console.log(myname("malaika"));
function chai(water, teabag, sugar, milk) {
    var chai = water + teabag + sugar + milk;
    return chai;
}
console.log(chai(1, 1, 2, 1));
function sum(a, b, c, d) {
    var sum = 1 + 4 + 2 + 2;
    return sum;
}
console.log(sum(1, 4, 2, 2));
function myteacher() {
    var myteacher = ("sir okasha , sir ubaid , sir asharib , miss hafsa");
    return myteacher;
}
var myteachers = myteacher();
console.log(myteachers);
function myresult(english, urdu, math, computer) {
    if (english >= 30) {
        console.log("pass");
    }
    else if (urdu >= 30) {
        console.log("pass");
    }
    else if (math >= 30) {
        console.log("pass");
    }
    else if (computer >= 30) {
        console.log("pass");
    }
    else {
        console.log("fail");
    }
    return "myresult";
}
myresult(70, 20, 56, 90);
function Ramzancodingnight(timing) {
    if (timing === 11) {
        console.log("you are on time");
    }
    else {
        console.log("watch recording");
    }
    return timing;
}
Ramzancodingnight(11);
//default parameter
function greet(name) {
    if (name === void 0) { name = "user"; }
    console.log("Hello ".concat(name));
}
greet("malaika");
//optional perameter ?
function greet2(name) {
    console.log("Hello ".concat(name));
}
greet2();
//rest perameter
function greet3(name) {
    var teacherName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        teacherName[_i - 1] = arguments[_i];
    }
    console.log("Hello ".concat(name, " ").concat(teacherName));
}
greet("okasha");
console.log("hello world, hello okasha , hello");
