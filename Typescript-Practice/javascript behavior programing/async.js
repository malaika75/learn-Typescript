// hamrary pass Asynchronous ky liye function hy settimeout. asynchronous me function lagta hy phir hamara code statement by stateent callstack me jata hy caalstack dekhta hy ky ye asynchronous hy tu wo  wo statement wo web api ko deta hy or callstack apna baki ka kaam shuru kr deta hy time complete ho jaye tab wo jata hy callback queue me chala jata hy event loop ek jaga hy jo callstack ko check krta rehta hy ky wo ka khali hota hy phir wo callback queue se code utha kr callstack mr ly jaye ga phir code console me execute hoga .. sab se pehly synchronous code chalta hy phir asynchronous
console.log("first");
setTimeout(function () {
    console.log("second");
}, 1000);
console.log("third");
function morningRoutine(eating, talking, sleeping, coding) {
    setTimeout(function () {
        console.log("your routine is amazing ".concat(eating, " ").concat(talking, " ").concat(sleeping, " ").concat(coding));
    }, 2000);
}
morningRoutine("breakfast", "chat", "nap", "code");
function hania() {
    setTimeout(function () {
        console.log("do you like chocolate");
    }, 3000);
}
hania();
var yes = function (callback) {
    setTimeout(function () {
        console.log("yes i like the most");
    }, 3000);
};
yes(hania);
