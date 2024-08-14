//Certainly! A concise definition of a "for" loop would be:
// 'for' loop is a programming construct used to repeatedly execute a block of code for a fixed number of times
// or until a specified condition is met."
for (var i = 1; i <= 10; i++) {
    console.log("hello world " + i);
}
console.log("done");
for (var i = 1; i <= 5; i++) {
    console.log("my name is malaika" + i);
}
for (var a = 1; a <= 4; a++) {
    console.log("pakistan zindabad " + a);
}
for (var a = 1; a <= 10; a++) {
    if (a % 2 == 0) {
        console.log(a);
    }
    ; //even numbers
}
for (var a = 1; a <= 10; a++) {
    if (a % 2 != 0) {
        console.log(a); //odd numbers
    }
}
for (var i = 0; i < 10; i++) {
    if (i < 10) {
        console.log("i love coding");
    }
    console.log("today i am learning loops" + i);
}
var _loop_1 = function (j) {
    var arr = ["malaika", "nashra", "alishba", "ramish", "hamza"];
    var arr1 = arr.forEach(function (arr) {
        console.log("hello ".concat(arr1, " your exam is scheduled you were come to attend test on \n        time. the time and date send you in goole link please make sure be on time\n        otherwise we are not responsible for your loss...."));
    });
};
for (var j = 1; j <= 5; j++) {
    _loop_1(j);
}
