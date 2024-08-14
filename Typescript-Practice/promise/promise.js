"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let color = new Promise((res, rej) => {
    setTimeout(() => {
        let fav = "black";
        console.log('what is your favorite color??');
        if (fav) {
            res(`fav color is `);
        }
        else {
            rej("fav color is not provided");
        }
    }, 2000);
});
color.then((fav) => {
    console.log("access your color successfully");
});
color.catch(() => {
    console.log("failed");
});
function files1(data) {
    console.log(`${data} your files is in the data`);
}
files1("success");
let files = new Promise((resolve, reject) => {
    let download = "successfull";
    if (download) {
        resolve("good");
    }
    else {
        reject("sorry");
    }
});
files.then(() => {
    console.log("upload files successfully");
});
files.catch(() => {
    console.log("prosess failed");
});
async function biscuit() {
    console.log("i like chocolate biscuites");
}
//promise is used to control asynchronous code 
let arr = [1, 4, 7, 9];
let promise = new Promise((resolve, reject) => {
    if (arr.includes(4)) {
        resolve("available");
    }
    else {
        reject("sorry not available");
    }
});
promise.then((message) => {
    console.log("congratulations, " + message);
});
promise.catch((error) => {
    console.log("fail, " + error);
});
