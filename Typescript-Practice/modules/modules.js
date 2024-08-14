"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
console.log((0, main_1.num)());
var main_2 = require("./main");
console.log((0, main_2.num1)(21));
var index_1 = require("./index");
console.log(index_1.choice, (0, index_1.num4)());
//import isfollow from "./main"
//console.log(isfollow())
var index_2 = require("./index");
console.log((0, index_2.default)());
var main_3 = require("./main");
console.log(main_3.myname);
var main_4 = require("./main");
console.log((0, main_4.arr)("pink"));
var organs = function () {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    console.log("my body parts ".concat(parts));
};
exports.default = organs;
organs("body", "head", "legs", "foot");
