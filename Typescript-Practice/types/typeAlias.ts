//A type alias is a shorter name for a type. For example, you could create a User alias like this: 
//type alias User = { name : String , age : Int } Rather than writing the whole record type all the time, 
//we can just say User instead.

type InformationTypes = {
    name : string 
    age : number
    email : string
    course : string 
    fees : number
}

let foam : InformationTypes = {

    name : "laiba",
    age : 19,
    email : "laiba@123",
    course : "machine laerning",
    fees : 20000,
}
console.log (foam)

type fomat  = {
    name : string
    model : number
    colour : string
    price : number
}

let car : fomat = {
    name : " land cruiser",
    model : 2022,
    colour : "black",
    price : 20000000
}
console.log (car)

type intro =                   
{ name :string
age:number
experience:number
}

let myIntro:intro = {
name:"malaika",
age:56,
experience:2,
}
console.log(myIntro.name)
console.log(myIntro)