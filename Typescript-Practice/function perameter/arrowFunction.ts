()=>{
    console.log("hello world")
}
//how to call this function

let add = () => {
    console.log("ali")
}

add()
//add => in variable arrow return ka kaam krta hy

let num = () => {
    console.log(24)

}
num()

let nope = (hello:string)=> hello
    console.log(nope( "wor;ld"))


let sqaure = x => x * x 
console.log(sqaure(5))

let plus = a => b => a + b
console.log(plus(10)(5))

let division = cde => ght => cde / ght
console.log(division(2)(10))

let multiple = kui => 7 * 8
console.log(multiple(7))

let num22 = (num:number,num1:number)=> num + num1
console.log(num22(5,10))