var num1 = 4 + "4";
console.log(num1);
var num2;
num2 = 22;
num2 = "muniba mazari";
num2 = true;
num2 = false;
console.log(num2);
var num3 = 0;
var num4 = 5;
console.log(num4 / num3);
var num5 = "uu";
var num6 = 0;
console.log(num5 + num6);
var x = 2;
x += 1;
console.log(x);
//interview questions
//true ki value 1 or false ki vlaue 0 hoti hy
//console.log(1 + true)
//Task 1: How to generate all combinations of a string in JavaScript ?
//Hint : input : Dog => output : Possible Combination [D], [Do], [Dog], [o], [og], [g]
//Task 2: Convert numbers to string words. 
//Hint : input : 123 output : one hundred twenty three
function generateCombinations(str) {
    var combination = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j <= str.length; j++) {
            combination.push(str.slice(i, j));
        }
    }
    return combination;
}
console.log(generateCombinations("dog"));
var num8 = 123;
num8.toString();
console.log(num8);
