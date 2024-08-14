"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//object
let info = {
    name: "Humaima",
    age: 37,
    CNIC: 42467980321,
    education: "master",
    phoneno: 907660199760,
};
info.name = "humaira";
console.log(info.CNIC);
console.log(info);
// //nested object
let students = {
    name: "malaika",
    age: 20,
    rollno: 56097,
    address: "karachi",
}, student1 = {
    name: "sania",
    age: 19,
    rollno: 65890,
    address: "karachi",
}, student2 = {
    name: "Rayan",
    age: 21,
    rollno: 56910,
    address: "karachi",
}, student3 = {
    name: "saima",
    age: 19,
    rollno: 67890,
    address: "karachi",
}, student4 = {
    name: "farheen",
    age: 18,
    rollno: 65890,
    address: "lahore",
}, student5 = {
    name: "Mustafa",
    age: "20",
    rollno: 78901,
    address: "islamabad",
};
let allStudents = [students, student1, student2, student3, student4, student5];
allStudents.forEach((allStudents) => {
    console.log(allStudents);
});
let information = {
    name: "malaika",
    age: 21,
    cnicno: 96789021,
}, information1 = {
    name: "nashra",
    age: 24,
    cnicno: 787543021,
}, information2 = {
    name: "ramish",
    age: 17,
    cnicno: 567098,
};
console.log(information.cnicno);
console.log(information, information1, information2);
let student = {
    name: "malaika",
    rollno: 890123,
};
let teacher = {
    name: "okasha",
    experience: 3,
};
let teacher2 = {
    name: "okasha",
    experience: 3,
    rollno: 890123,
};
console.log(teacher2, teacher, student);
let ice_cream = "vanila";
console.log(ice_cream);
//structural type
//fresh object
//steal object
let ball = {
    diameter: 10,
};
let sphare = {
    diameter: 20,
};
let tube = {
    diameter: 30,
    length: 35,
};
ball = sphare;
sphare = ball;
console.log(ball);
console.log(sphare);
//ball 
ball = tube;
console.log(ball);
console.log(sphare);
console.log(tube);
