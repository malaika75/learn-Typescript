//rest peramerter

function names(...teacherNames:string[]){
    console.log(`sir ${teacherNames}`)
}
names(" oskasha" , " ubaid" , " asharib" , " ameen alam")

function Greet(...name:string[]){
    console.log(`hello friends ${name} chai pi lo`)
}

Greet(" amna", " sehrish", " ramish", " nashra", " laiba", " samra")

function sum(...num :number[]){
    console.log(`the sum of ${num}`)

}
sum (1 + 2 + 6 + 9 + 3 + 4 + 3 + 9 + 3)

function dishes (...favdish:string[]){
    return favdish
}
console.log(dishes("biryani" , "pasta", "lazagna", "brownie",))

function animal(...animals:string[]){

    return animals
}
console.log(animal("dog" , "cat", "frog", "monkey", "crocodile"))