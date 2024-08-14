let myType = {
    name: "malaika",
    age: 21
}

myType = {
    name: "nashra",
    age:24
}

myType = {
    name: "zaira",
    age: 1,
    //gender: "female"
}

function random (){
    const num = Math.floor(Math.random()* 11)
    console.log(" my random number is " + num )
    return num}
    random()

let mynum:string = "hello world"
let num1 = mynum.split('').reverse().join('')
console.log(num1)

let num2:number[] = [1,2,3,4,5]
let num3 = num2.reverse()
console.log(num3)

let num4:string[] = ["ruby"]
let num5 = num4.reverse()
console.log(num5)

let num6:string[] = ["Good my work is done"]
let num7 = num6.find(num => num[1])
console.log(num7)

console.log(typeof null)

let num66 : any = "6"
let num = num66 * 5
console.log(num)

let arr = [1,2,3,4]
let arr2 = arr.length
console.log(arr2)