import {num} from "./main"
console.log(num())

import {num1} from "./main"
console.log(num1(21))

import { choice , num4 } from "./index"
console.log(choice , num4())

//import isfollow from "./main"
//console.log(isfollow())

import names  from "./index"
console.log(names())

import { myname } from "./main"
console.log(myname)

import {arr} from "./main"
console.log(arr("pink"))


let organs = (...parts:string[]) => {
console.log(`my body parts ${parts}`)
}
export default organs

organs("body","head","legs","foot")