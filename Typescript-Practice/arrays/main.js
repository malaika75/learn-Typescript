//array functions 
var arr = ["apple", "mango", "cherry", "banana"];
console.log(arr[0]);
arr.pop();
arr.push("watermelon");
console.log(arr);
arr.shift();
arr.unshift("peach");
console.log(arr);
var myarr = arr.slice(0, 3);
console.log(myarr);
arr.splice(0, 2, "chiko", "orange");
console.log(arr);
//map
//map function purany array ko change kiye bagir us ky hr value pr ek task apply krta hy or phir ek 
//naya array banata.
//Maan lijiye aapke paas ek array hai jismein students ke marks hain aur aap in marks ko 5 se increase karna
// chahte hain. Aap map function ka use karke yeh kaam asaani se kar sakte hain.
var student = [30, 56, 90, 87, 59];
var mys1 = student.map((function (marks) { return marks + 5; }));
console.log(mys1);
var count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var task = count.map(function (multiply) { return multiply * 3; });
console.log(count);
console.log(task);
var sisters = ["laiba ", "nashra ", "samra "];
var fullname = sisters.map(function (full) { return full + "zahid"; });
console.log(fullname);
//reduce method tab use hoti hai jab aapko ek array ke tamam elements ko combine karke ek single value banani ho.
// Yeh value kisi bhi type ki ho sakti hai jaise ke number, string, object, ya array.
//Kuch common situations jahan reduce method useful hoti hai:
// Yeh calculation, concatenation, ya kisi bhi tarah ka reduction ho sakta hai.
//Agar aapko array ke tamam numbers ka sum ya product nikalna ho. product kehty do ya zada numbers ko multiply kry
//tu jo answer ata hy usy product kehty hy.
var arr1 = [12, 2, 5];
var task1 = arr1.reduce(function (a, b) {
    return a + b;
}, 1);
console.log(task1);
var arr2 = ["malaika", " zahid"];
var task2 = arr2.reduce(function (a, b) {
    return a + b;
}, " ");
console.log(task2);
//filter method array ke elements ko filter karke naya array banati hai jo given condition ko meet karte hain.
// Yeh method bohot useful hoti hai jab aapko specific criteria ke basis par elements ko filter karna ho.
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var oddNumbers = num.filter(function (num) { return num % 2 === 1; });
console.log(oddNumbers);
var num1 = ["mala", "faizan", "ramsha"];
var num2 = num1.filter(function (num) { return num[0] === "r"; });
console.log(num2);
