// oop is considered a paradigm
// there are 
// encapsulation  = protecting our data
// polymorphism = different behavior of different intances
// abstraction = hidding our irrelevent data 
// inheritance = one property of object is aquiring to another property of object
//modifier hy oop ky public private , protected 
// new ka keyword ek copy banata hy , constuctor me hum value assign krty hy or wo khud hi call ho jata hy
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mycar = {
    brand: "toyota",
    model: "carola",
    year: 2024,
    displayDetails: function () {
        return "brands ".concat(mycar.brand, " model ").concat(mycar.model, " year ").concat(mycar.year);
    }
};
console.log(mycar.displayDetails());
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = "toyota";
        this.model = "carola";
        this.year = 2024;
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayDetails = function () {
        return "brand ".concat(this.brand, " model ").concat(this.brand, " year ").concat(this.year);
    };
    return Car;
}());
var cars = new Car("honda", "civic", 2022);
console.log(cars);
console.log(cars.displayDetails());
var bike = /** @class */ (function () {
    function bike(handle, tire, seet) {
        this.handle = handle;
        this.tire = tire;
        this.seet = seet;
    }
    return bike;
}());
var colors = new bike("brown", "black", "silver");
console.log(colors);
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.canprogram = function () {
        console.log("this student can program");
    };
    return Student;
}());
var s1 = new Student("malaika", 21);
//s1.age = 21
//s1.name = "malaika zahid"
s1.name = "ruby";
s1.canprogram();
console.log(s1);
var TakePhoto = /** @class */ (function () {
    function TakePhoto(filter, brust) {
        this.filter = filter;
        this.brust = brust;
    }
    return TakePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(reelTime, filter, brust) {
        var _this = _super.call(this, filter, brust) || this;
        _this.reelTime = reelTime;
        return _this;
    }
    return Instagram;
}(TakePhoto));
var inataApp = new Instagram(20, "cheery", 5);
console.log(inataApp);
var PersonalData = /** @class */ (function () {
    function PersonalData(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    Object.defineProperty(PersonalData.prototype, "updateAge", {
        set: function (upgrade) {
            this.age = upgrade;
        },
        enumerable: false,
        configurable: true
    });
    return PersonalData;
}());
var tDetail = new PersonalData("malaika", 20, 2);
console.log(tDetail);
tDetail.updateAge = 21;
console.log(tDetail);
