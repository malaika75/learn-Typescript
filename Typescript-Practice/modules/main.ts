export let num = () => "hello world"
console.log(num())

export let num1 = (age: number) => `age is ${age}`
console.log(num1(21))

import { choice} from "./index" 
console.log(choice)

 //let isfollow = () => true 
 //export default isfollow
//console.log(isfollow())

export let myname = "malaika zahid"
console.log(myname)

export function arr(colors:string){
    return colors
}
    console.log(arr("pink"))
    
export let func = (a:number,b:number)=> a+b
    console.log(func(5,10))
    