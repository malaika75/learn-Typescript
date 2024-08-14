"use strict";
let name1 = " malaika";
console.log(name1);
name1 = "ruby";
console.log(name1);
//bio data 
let personname = "malaikazahid";
let age = 21;
let ismarried = false;
console.log(personname);
console.log(age);
console.log(ismarried);
const personname1 = "malaika";
let age2 = 21;
let isfollow = true;
let sign = null;
let pass = undefined;
console.log(personname1);
console.log(age2);
console.log(isfollow);
console.log(sign);
console.log(pass);
const apple = "green";
const banana = "yellow";
const cherry = "purple";
console.log(apple);
console.log(banana);
console.log(cherry);
let myNum = 8;
console.log(myNum);
const myNum3 = 76;
console.log(myNum3);
let input = 10;
function timer(time) {
    let intervalId = setInterval(() => {
        input--;
        let format = input.toFixed(2);
        console.log(format);
        if (input === 0) {
            clearInterval(intervalId);
            console.log("timer expired");
        }
    }, 1000);
}
timer(input);
