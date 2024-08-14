//tuples agr apny fix type ka array banana hy tu tuples use hongy
//let traficLight :string[] = ["green", "yellow", "red"]
//let tuples : [string,boolean,number] = ["abc",true,3]

//tuples.push(false)
//tuples.pop()
//console.log(tuples)

let fruits:[string,string,string] = ["apple","mango","orange"] //tuples
let array:string[] = ["maria" , "dania", "amna", "fozia",] //array

//let color :[number,boolean,string] = ["red",false,7] // Error due to assigning values in the wrong order
let tuples :[number,boolean,string] = [66, true, "mahenoor"] //correct order of types
console.log (tuples , fruits)

type Attendence = [number,string,boolean]
let student:Attendence[] = [
[298 , "malaika"  , true],
[456 , "nashra"  , false],
[789 , "ramish", true]
]
console.log(`student name:`, student[0][1], `is present:` ,student[0][2])
console.log (`student name:`, student[1][1], `is present:`, student [1][2])
console.log(`student name:`, student[2][1], `is present`, student[2][2])  

let organ :string[] = ["body","head"]

let tupleOrgan :[string,string] = ["body" , "head"]

const food:[string,number,number,boolean] = ["biryani" ,1,20,false]
    console.log(food)

    let iceCream :[string,string,string] = ["chocolate","vanila","strawberry"]
    console.log(iceCream)