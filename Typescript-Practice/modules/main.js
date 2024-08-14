"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.func = exports.arr = exports.myname = exports.num1 = exports.num = void 0;
var num = function () { return "hello world"; };
exports.num = num;
console.log((0, exports.num)());
var num1 = function (age) { return "age is ".concat(age); };
exports.num1 = num1;
console.log((0, exports.num1)(21));
var index_1 = require("./index");
console.log(index_1.choice);
//let isfollow = () => true 
//export default isfollow
//console.log(isfollow())
exports.myname = "malaika zahid";
console.log(exports.myname);
function arr(colors) {
    return colors;
}
exports.arr = arr;
console.log(arr("pink"));
var func = function (a, b) { return a + b; };
exports.func = func;
console.log((0, exports.func)(5, 10));
