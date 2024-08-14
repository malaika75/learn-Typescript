//function halffryegg():number{
//let cooked:number = 1 + 1.5 +2
//console.log (cooked)
// return cooked}
//const response:number = halffryegg()
//console.log(response)
//parameters and arguments
function halffryegg(egg, butter, salt) {
    return egg + butter + salt;
}
var response = halffryegg(1, 1.5, 2);
console.log(response);
//dynamic function jo hr jaga use ho saky
//function Myteachers(teacher1:string,teacher2:string,teacher3:string,teacher4:string){
//  return teacher1 + teacher2 + teacher3 + teacher4 
//}
//const responsee = Myteachers ("asharib","ubaid", "hafsa","naeem")
//(console.log(responsee);
function Myteachers(teacher1, teacher2, teacher3) {
    return teacher1 + teacher2 + teacher3;
}
var responsee = Myteachers("asharib", "ubaid", "hafsa");
console.log(responsee);
function myname(name) {
    return name;
}
var name1 = myname("nashra");
console.log(name1);
function chai(water, sugar, teabag, milk) {
    return water + sugar + teabag + milk;
}
var mychai = chai(1, 2, 1, 1);
console.log(mychai);
function students(student1, student2, student3) {
    return student1 + student2 + student3;
}
var no1 = students(92, 68, 46);
console.log(no1);
function sisters(sister1, sister2, sister3, sister4) {
    return sister1 + sister2 + sister3 + sister4;
}
var name5 = sisters("samra", "nashra", "ruby", "laiba");
console.log(name5);
function myfriends() {
    var friends = ("hina, bisma, dania");
    return friends;
}
var friend = myfriends();
console.log(friend);
function cozns() {
    var name = "mahnoor,ramsha,laraib";
    console.log(name);
}
cozns();
function mymarks() {
    var marks = (66 + 89 + 92);
    return marks;
}
var marks1 = mymarks();
console.log(marks1);
function fruit(apple, grapes, oranges) {
    var fruits = [apple, grapes, oranges];
    return fruits;
}
console.log(fruit("1 kilo", "3 kilos", "1 kilo"));
function fruits(kilo, favFruits) {
    console.log("".concat(favFruits, " ").concat(kilo, " boxes available"));
}
fruits(5, "cherry");
function shirt(size, print) {
    console.log("".concat(size, " size is available ").concat(print, " printed on it"));
}
shirt("large", "coding is love");
function cities() {
    var cities = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        cities[_i] = arguments[_i];
    }
    cities.forEach(function (city) {
        console.log("my fav city is  ".concat(cities, " "));
    });
    // return cities
}
cities("karachi", "lahore", "islamabad", "pishawar");
