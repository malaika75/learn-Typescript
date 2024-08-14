"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let makefries = () => "your fries is being prepared";
console.log(makefries(), "table 1");
let sirZiaPromise = new Promise((resolve) => {
    return resolve("passed out");
});
sirZiaPromise.then((status) => {
    console.log(status);
}).catch((err) => {
    console.log(err);
});
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("hello,world");
    }, 2000); // after 2 second
});
helloPromise.then((message) => {
    console.log(message);
});
const conditionalPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    // ramdomly choose success or failure
    if (success) {
        resolve("success!");
    }
    else {
        reject(new Error("failure"));
    }
});
console.log(conditionalPromise);
//async function
