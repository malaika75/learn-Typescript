//optional perameter
function city(name) {
    console.log("l live in ".concat(name));
}
city("karachi");
function dish(name) {
    console.log("I love ".concat(name));
}
dish();
function book(author, title, year) {
    if (author === void 0) { author = "malaika"; }
    console.log("book details: author: ".concat(author, "\n title: ").concat(title, "\n year: ").concat(year));
}
book("malaika", "technology", 2024);
function foam(name, experience, coures, age) {
    var foam = [name, experience, coures,];
    if (age !== undefined) {
        foam.push(age);
    }
    return foam;
}
console.log(foam("maria", 2, "machine learning", 21));
function greet(name, greeting) {
    if (greeting !== undefined) {
        return name + greeting;
    }
    else {
        return name;
    }
}
console.log(greet("hey mariya"));
function fullon(greet, age, hello) {
    if (hello === void 0) { hello = "friends"; }
    var friend = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        friend[_i - 3] = arguments[_i];
    }
    var fullon = [greet, hello, friend];
    if (age !== undefined) {
        fullon.push(age.toString());
    }
    return fullon;
}
console.log(fullon("hey", undefined, undefined, "mahrooz", "majeed", "monika", "laiba", "noreen", "afzal"));
