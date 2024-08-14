(function () {
    console.log("hello world");
});
//how to call this function
var add = function () {
    console.log("ali");
};
add();
//add => in variable arrow return ka kaam krta hy
var num = function () {
    console.log(24);
};
num();
var sqaure = function (x) { return x * x; };
console.log(sqaure(5));
var plus = function (a) { return function (b) { return a + b; }; };
console.log(plus(10)(5));
var division = function (cde) { return function (ght) { return cde / ght; }; };
console.log(division(2)(10));
var multiple = function (kui) { return 7 * 8; };
console.log(multiple(7));
