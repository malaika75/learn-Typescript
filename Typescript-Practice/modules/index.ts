export let choice: string = "i love chocolate"
console.log(choice)

export let num4 = () => [2 , 4, 6, 8, 10]
console.log(num4())

export default function names(...names: string[]) {
    return names

}
console.log(names("amna", "samra", "hassan", "ruby", "faizan", "mahnnor", "sanaa"))

import organs from "./modules"
console.log(organs("body","head","legs","foot"))