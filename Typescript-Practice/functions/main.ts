//function halffryegg():number{
    //let cooked:number = 1 + 1.5 +2
    //console.log (cooked)
   // return cooked}

//const response:number = halffryegg()
//console.log(response)

//parameters and arguments
function halffryegg (egg: number, butter: number , salt:number ):number {
return egg + butter + salt }
let response:number = halffryegg (1, 1.5, 2)
console.log (response)

//dynamic function jo hr jaga use ho saky
//function Myteachers(teacher1:string,teacher2:string,teacher3:string,teacher4:string){
  //  return teacher1 + teacher2 + teacher3 + teacher4 
//}
//const responsee = Myteachers ("asharib","ubaid", "hafsa","naeem")
//(console.log(responsee);
function Myteachers(teacher1:string,teacher2:string,teacher3:string){
    return teacher1+teacher2+teacher3
}
const responsee =Myteachers("asharib","ubaid","hafsa")
console.log(responsee)
function myname(name:string){
    return name
}
let name1=myname("nashra")
console.log(name1)

function chai(water:number,sugar:number,teabag:number,milk:number):number{
    return water+sugar+teabag+milk
}
const mychai:number=chai(1,2,1,1)
console.log(mychai)
function students(student1:number,student2:number,student3:number){
    return student1+student2+student3
}
const no1:number=students(92,68,46)
console.log(no1)
function sisters(sister1:string,sister2:string,sister3:string,sister4:string){
    return sister1+sister2+sister3+sister4
}
const name5:string=sisters("samra","nashra","ruby","laiba")
console.log(name5)

function myfriends(){
    let friends:string= ("hina, bisma, dania")
    return friends
}
let friend:string=myfriends()
console.log(friend)

function cozns(){
    let name:string="mahnoor,ramsha,laraib"
    console.log(name)}
cozns()

function mymarks(){
    let marks:number= (66+89+92)
    return marks
}
let marks1:number=mymarks()
console.log(marks1)

function fruit (apple:string, grapes:string, oranges:string){
   
   let fruits = [apple , grapes, oranges]
    return fruits
}
console.log(fruit("1 kilo" , "3 kilos" , "1 kilo"))

function fruits(kilo:number, favFruits:string){
    console.log(`${favFruits} ${kilo} boxes available`)

}
fruits(5 , "cherry")

function shirt(size:string, print:string){
    console.log(`${size} size is available ${print} printed on it`)

}
shirt("large" ,"coding is love")

function cities (...cities:string[]){
    cities.forEach(city =>{
        console.log(`my fav city is  ${cities} `)
    })
   // return cities
}
cities("karachi", "lahore", "islamabad", "pishawar")