//object
 let info:{name:string, age:number, CNIC:number, education:string, phoneno:number} = {
  name : "Humaima",
  age : 37,
  CNIC : 42467980321,
 education : "master",
 phoneno : 907660199760,
 }
 info.name = "humaira"

 console.log (info.CNIC)
 console.log (info)

// //nested object
 let students: { name: string; age: number; rollno: number; address: string } = {
   name: "malaika",
   age: 20,
   rollno: 56097,
   address: "karachi",
 },
 student1 = {
    name: "sania",
    age: 19,
    rollno: 65890,
    address: "karachi",
  },
  student2 = {
    name: "Rayan",
    age: 21,
    rollno: 56910,
    address: "karachi",
  },
  student3 = {
    name: "saima",
    age: 19,
    rollno: 67890,
    address: "karachi",
  },
  student4 = {
    name: "farheen",
    age: 18,
   rollno: 65890,
    address: "lahore",
 },
  student5 = {
     name: "Mustafa",
     age: "20",
     rollno: 78901,
    address: "islamabad", };

 let allStudents = [students, student1, student2, student3, student4, student5];
 allStudents.forEach((allStudents) => {
 console.log(allStudents);
 });

//type alias dynamic type
 type IStudentInformation = {
   name : string
   age : number
  cnicno : number
 }
 
 let information :IStudentInformation = {
   name : "malaika",
   age : 21,
   cnicno : 96789021,
 }, 
 information1 = 
 {
   name : "nashra",
   age : 24,
   cnicno : 787543021,
 },
 information2 = {
  name: "ramish",
   age : 17,
   cnicno :567098,
 }
 console.log (information.cnicno)
 console.log (information, information1, information2)

 //intersection dotypes ko combine krna
 type Istudent = {
   name : string
  rollno : number
 }

type ITeacher = {
  name : string
  experience : number
 }

 let student : Istudent ={
  name : "malaika",
   rollno : 890123,
 }

 let teacher : ITeacher ={
  name : "okasha",
  experience : 3,
 }
type intersectionType = Istudent & ITeacher
 let teacher2 : Istudent & ITeacher = {
 name : "okasha",
  experience : 3,
   rollno : 890123,
 }
console.log (teacher2, teacher, student)
//literal type
type Icecreamflavor = "chocolate"| "vanila"|"strawberry"
 let ice_cream : Icecreamflavor = "vanila"
 console.log (ice_cream)

//structural type
//fresh object
//steal object

let ball = {
  diameter : 10,
}
let sphare = {
  diameter : 20,
}
let tube = {
  diameter : 30,
  length : 35,
}

ball = sphare
sphare = ball
console.log (ball)
console.log (sphare)
//ball 
ball = tube 
console.log (ball)
console.log (sphare)
console.log (tube)
interface info  {
  name:string,
  age:number,
  experience:string
  course: string}
  
  let object = {
  name:"malika",
  age : 5,
  experience: "5years",
  course: "coding"},
  st1 = {
  name:"maha",
  age:4,
  experience:"4years",
  course:"coding"}
console.log(object, st1)