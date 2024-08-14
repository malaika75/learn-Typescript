//default perameter
function country(name) {
    if (name === void 0) { name = "zindabad"; }
    console.log("pakistan ".concat(name));
}
country();
//country("zindabad")
function flavour(name) {
    if (name === void 0) { name = "chocolate"; }
    console.log("i love ".concat(name));
}
flavour();
//flavour("chocolate") 
function colour(colour1, colour2, colour3) {
    if (colour1 === void 0) { colour1 = "blue"; }
    if (colour2 === void 0) { colour2 = "black"; }
    if (colour3 === void 0) { colour3 = "red"; }
    console.log("my favourite colour is ".concat(colour1, " ").concat(colour2, " ").concat(colour3));
}
//colour()
colour("pink", "purple", "black");
