type Ipapers = {
    subject : string 
    marks : number 
    result : boolean 
}
type IstudentInformation = {
    name : string
    field : string
    rollno : number
}

let student1 : Ipapers = {
    subject : "maths",
    marks : 90,
    result : true
}
let studentinfo : IstudentInformation = {
    name : "laiba",
    field : "computer science",
    rollno : 18062
}
type allinfo = IstudentInformation & Ipapers
 let student2 : allinfo = {
     name : "laiba",
     field : "computer science",
     rollno : 18062,
     subject : "maths",
     marks : 90,
     result : true
 }
 console.log (student2)
type intro =
{ name:string
age:number
experience:string}

type teacher = 
{name:string
course:string
}

type myinfo = teacher & intro
let info :myinfo = 
{name:"malaika",
age:21,
experience:"2 years",
course:"machine learning"}