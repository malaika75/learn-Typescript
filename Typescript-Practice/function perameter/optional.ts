//optional perameter
function city(name? :string ){
    console.log (`l live in ${name}`)
}
city("karachi")

function dish(name?:string){
    console.log(`I love ${name}`)
}
dish()

function book (author :string = "malaika" , title?:string , year? :number){
    console.log (`book details: author: ${author}\n title: ${title}\n year: ${year}`)

}
book("malaika","technology", 2024)

function foam (name:string, experience:number, coures:string , age?:number ){
    let foam = [name, experience, coures,]
    if (age !== undefined){
        foam.push(age)
    }
    return foam


}
console.log(foam("maria", 2 , "machine learning" , 21))

function greet(name:string, greeting?:string){
    if (greeting !== undefined){
        return name + greeting
    }else{
        return name

    }}
console.log(greet("hey mariya"))

function fullon(greet:string, age?:number , hello:string = "friends" , ...friend:string[]){
    let fullon = [greet , hello , friend]
    if (age !== undefined){
        fullon.push(age.toString())
    }
    return fullon

}
console.log(fullon("hey", undefined , undefined , "mahrooz","majeed", "monika", "laiba", "noreen", "afzal"))