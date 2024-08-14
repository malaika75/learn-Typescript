//padStart method se hum kisi string ko ek specific length tak badha sakte hain aur usko kisi aur string se pad kar sakte hain. Yeh padding shuru se hoti hai. pad start me digit jo hamny dia uska matlab hy ky total lenth kitni hini chahiye or dosra number ky kia chez add kr ky lenth utni krni hy 
var num = "6";
var num1 = num.padStart(2, "1");
console.log(num1);
//toString toString method kisi bhi object ko string mein convert karta hai.
var num2 = 123455;
var num3 = num2.toString();
num3 = num3.padStart(9, "0");
console.log(num3);
//typeof operator humein kisi bhi value ka type batata hai.
var myName = "malaika";
console.log(typeof (myName));
//setInterval method ek function ko baar-baar specific interval ke baad call karta hai.setinterval ek function hy jo hamary code ko baar bar call  kr ky excute krta hy jab tak condition stop nhi hoti clearinterval is condition ko stop krta hy jaha stop krna ho waha ye likhty hy .. intervalId setinterval  ki id rakta hy clearInterval ko call krty hoye usme intervalid likhty hy isse wo setinterval stop kr pata hy
var count = 10;
function hello() {
    var intervalId = setInterval(function () {
        count--;
        console.log(count);
        if (count === 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}
hello();
