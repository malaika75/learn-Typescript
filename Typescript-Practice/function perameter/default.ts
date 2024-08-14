//default perameter
function country(name:string = "zindabad"){
console.log (`pakistan ${name}`)
}

country()
//country("zindabad")

function flavour (name:string = "chocolate"){
    console.log (`i love ${name}`)
}
flavour()
//flavour("chocolate") 

function colour(colour1:string = "blue",colour2:string = "black", colour3:string = "red"){
    console.log (`my favourite colour is ${colour1} ${colour2} ${colour3}`)

}
//colour()
colour("pink","purple","black")