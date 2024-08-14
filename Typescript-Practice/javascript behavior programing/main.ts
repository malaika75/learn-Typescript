//callstack me hamara code execute hota hy ek statement excecute krta hy phir wo remove ho jata hy phir dosra statement ata hy 
// javascript ek interperated language hy 
// this is an synchronous
//javascrip ek single thread language ek aysi jaga hy pehla kaam khatam na krly dosra kaam nhi krti 
console.log("first")
for(let i = 0 ; i <= 10 ; i++)
console.log("third" +i)
console.log("second")
//callback function synchronous behavior
function greeting (askname : ()=> void){
    console.log ("hello greet")
    askname()
}

function askname (){
    console.log ("enter your name")
}

greeting(askname)
//console.log (askname)

function num1(name :string):void{
console.log(`${name} is sad`)
}
num1("mala")

function num2 (num1: (name:string )=> void):void {
console.log(`is happy`)

}
num2(num1)