// oop is considered a paradigm
// there are 
// encapsulation  = protecting our data
// polymorphism = different behavior of different intances
// abstraction = hidding our irrelevent data 
// inheritance = one property of object is aquiring to another property of object
//modifier hy oop ky public private , protected 
// new ka keyword ek copy banata hy , constuctor me hum value assign krty hy or wo khud hi call ho jata hy
//Class
//Ek class ek blueprint hoti hai jo objects banane ke liye use hoti hai. Class mein hum properties (data members) aur methods (functions) define karte hain jo object ki state aur behavior ko represent karte hain.
interface types {
    brand : string
    model : string
    year : number
    
}
const mycar = {
    brand : "toyota",
    model : "carola",
    year : 2024,
    displayDetails : function(){
        return `brands ${mycar.brand} model ${mycar.model} year ${mycar.year}`

    }
}
console.log(mycar.displayDetails())

class Car implements types{
    public brand = "toyota"
    model = "carola"
    year = 2024
    constructor(brand:string, model :string , year:number){
        this.brand = brand
        this.model = model
        this.year = year

    }
    displayDetails (){
        return `brand ${this.brand} model ${this.brand} year ${this.year}` 
    }
}
let cars = new Car("honda" , "civic" , 2022)
console.log(cars)
console.log(cars.displayDetails())

class bike {
    handle 
    tire 
    seet 
    constructor(handle:string, tire :string , seet : string){
        this.handle = handle
        this.tire = tire
        this.seet = seet
    } 
}

let colors = new bike("brown","black","silver")
console.log(colors)

class Student {
    name :string
    age : number

    constructor(name:string , age:number){
        this.name = name
        this.age = age
    }

    canprogram():void{
        console.log("this student can program")
    }
}
let s1:Student = new Student("malaika", 21)
//s1.age = 21
//s1.name = "malaika zahid"
s1.name = "ruby"
s1.canprogram()

console.log(s1)

abstract class TakePhoto {
    filter :string
    brust  :number
    constructor(filter:string , brust :number){
        this.filter = filter
        this.brust = brust
    }
}


class Instagram  extends TakePhoto{
    reelTime : number
    filter: string
    brust: number

    constructor(reelTime:number, filter:string, brust:number){
        super(filter, brust)
        this.reelTime = reelTime
    }
}

let inataApp = new Instagram(20 , "cheery" , 5)
console.log(inataApp)

class PersonalData {
    public name :string
    private age :number
    public experience :number

    constructor (name:string , age:number, experience:number){
        this.name = name
        this.age = age
        this.experience = experience
    }
    set updateAge(upgrade:number){
        this.age = upgrade
    }
}
let tDetail:PersonalData = new PersonalData("malaika", 20 , 2)
console.log(tDetail)

tDetail.updateAge = 21
console.log(tDetail)


