var myType = {
    name: "malaika",
    age: 21
};
myType = {
    name: "nashra",
    age: 24
};
myType = {
    name: "zaira",
    age: 1,
    //gender: "female"
};
function random() {
    var num = Math.floor(Math.random() * 11);
    console.log(" my random number is " + num);
    return num;
}
random();
var mynum = "hello world";
var num1 = mynum.split('').reverse().join('');
console.log(num1);
var num2 = [1, 2, 3, 4, 5];
var num3 = num2.reverse();
console.log(num3);
var num4 = ["ruby"];
var num5 = num4.reverse();
console.log(num5);
var num6 = ["Good my work is done"];
var num7 = num6.find(function (num) { return num[1]; });
console.log(num7);
console.log(typeof null);
var num66 = "6";
var num = num66 * 5;
console.log(num);
var arr = [1, 2, 3, 4];
var arr2 = arr.length;
console.log(arr2);
