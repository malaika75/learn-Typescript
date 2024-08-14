let cars = ["dodge", "lambo", "la farrari"]

cars.unshift("land cruiser")

console.log (cars)
//console.log (cars[2])


let city =["karachi","multan","peshawar","lahore","islamabad"]
city.push("hyderabad")
city.shift()
console.log(city)

const friends = ["samra", "laiba", "nashra", "ramsha",  ]
friends.push("kinza", "ramish", "rumaisa", "arshiya")
friends.pop()
console.log(friends)

let students = ["areeba", "mano", "halima", "hamza", "ali"]
students.push("mustafa", "rumaisa")
students.unshift("areeqa", "sumaiya")
console.log (students)

let recipe = ["salt", "sugar", "milk", "water", "tea bag", "cinnamon"]
recipe.pop()
recipe.shift()
console.log (recipe)

let accessories = ["earings", "scrunchies", "watch", "hairband", "bow", "necklace", "rings", ];
let new1 = accessories.slice(3, 7)
console.log (accessories , new1)

let countries = ["pakistan" ,"dubai", "europe", "kuwait", "USA", "qatar", "iran"]
let country = countries.slice(2 , 5)
console.log (countries , country)

let colours = ["pink", "blue", "purple", "black", "brown", "red"]
colours.splice(2 , 2 , "green" , "yellow")
console.log(colours)

let fruits = ["apple", "mango", "orange", "grapes"]
fruits.splice(0 , 1 , "kiwi" , "cherry")
console.log (fruits)

