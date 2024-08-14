"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.num4 = exports.choice = void 0;
exports.choice = "i love chocolate";
console.log(exports.choice);
var num4 = function () { return [2, 4, 6, 8, 10]; };
exports.num4 = num4;
console.log((0, exports.num4)());
function names() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return names;
}
exports.default = names;
console.log(names("amna", "samra", "hassan", "ruby", "faizan", "mahnnor", "sanaa"));
var modules_1 = require("./modules");
console.log((0, modules_1.default)("body", "head", "legs", "foot"));
