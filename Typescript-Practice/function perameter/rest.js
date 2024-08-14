//rest peramerter
function names() {
    var teacherNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        teacherNames[_i] = arguments[_i];
    }
    console.log("sir ".concat(teacherNames));
}
names(" oskasha", " ubaid", " asharib", " ameen alam");
function Greet() {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    console.log("hello friends ".concat(name, " chai pi lo"));
}
Greet(" amna", " sehrish", " ramish", " nashra", " laiba", " samra");
function sum() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    console.log("the sum of ".concat(num));
}
sum(1 + 2 + 6 + 9 + 3 + 4 + 3 + 9 + 3);
function dishes() {
    var favdish = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        favdish[_i] = arguments[_i];
    }
    return favdish;
}
console.log(dishes("biryani", "pasta", "lazagna", "brownie"));
function animal() {
    var animals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        animals[_i] = arguments[_i];
    }
    return animals;
}
console.log(animal("dog", "cat", "frog", "monkey", "crocodile"));
