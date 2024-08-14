function greeting (askname : ()=> void){
    console.log ("hello greet")
    askname()
}

function askname (){
    console.log ("enter your name")
}

greeting(askname)
//console.log (askname)


function cell (samsung :string):void{
    console.log (`${samsung} is best indroid mobile campany`)
}
    
function brand (mobiles:string , callback :(samsung :string) => void ):void{
    console.log("yes you are right")
    callback(mobiles)
}
brand("samsung" ,cell)

function atendence (studentName :string):void{
console.log(`${studentName} present teacher`)
}

let Names =(atendence: (studentName : string) => void): void => {
   const studens = [ "Ana bella","Bano qudsiya","Zara", "Muqeet","Fariha"]
    studens.forEach(studens => {
        atendence(studens)
    });
}
Names(atendence)


function laptop (brands :string):void{
    console.log(`${brands}  brand is outclass`)
}

let start = (laptop: (brands :string) => void):void => {
    let arr = ["lenovo", "dell", "hp"]
    arr.forEach(arr =>{
        laptop(arr)
    })
}
start(laptop)

let friends = (...names:string[]) =>{
    names.forEach(nam =>{
        console.log(` hello how are you ${names}`)
    })
}
friends("afzal", "sashrukh", "maria", "horain", "mona")


let num1 = (iphone:string) => {
    iphone 
    console.log(`${iphone} 15 pro max`)
}
    
    
    function num2(num1: (iphone:string)=> void):void{
    console.log(`iphone is very expensive`)
    num1("iphone")
}
    
    num2(num1)
    
    