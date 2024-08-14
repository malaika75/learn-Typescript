//function overload
//isme function multiple function 

function colours(color1 :string):string
function colours(color1 :number):number
function colours(color1 :any):any{
return color1
}
console.log(colours("pink"))

function fruits (fruit1:string):string
function fruits (fruit1:string):string
function fruits(fruit1 : any):any{
    return fruit1
}
console.log(fruits("apple"))
 
function greet1 (pakistan:string):string
function greet1 (pakistan:number):number
function greet1 (pakistan:any):any{
return pakistan
}
console.log(greet1("pakistan zindabad"))
console.log(greet1 (123))
console.log(greet1("hello"))
console.log(greet1(345))
console.log (greet1("good morning"))

function add(a:string,b:string):string
function add(a:number,b:number):number
function add(a:boolean,b:boolean):boolean
function add(a:any,b:any):any{
    return a+b
}

console.log(add("malaika","zahid"))
console.log(add(67,76))