// enum me ye FIRST capital letters me likhna prefare kia jata hy , enums me key se index or index se key ko get kr sakty, STRING ky case me enum ki values set krna zaroori hy 
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
})(Days || (Days = {}));
console.log(Days["WEDNESDAY"]);
console.log(Days[0]);
var Days2;
(function (Days2) {
    Days2[Days2["THURSDAY"] = 2] = "THURSDAY";
    Days2[Days2["FRIDAY"] = 3] = "FRIDAY";
    Days2[Days2["SATURDAY"] = 4] = "SATURDAY";
})(Days2 || (Days2 = {}));
var DAYS3;
(function (DAYS3) {
    DAYS3["Sunday1"] = "Sunny Weather";
    DAYS3["sunday2"] = "Rainy Weather";
    DAYS3["sunday3"] = "Dry Weather";
})(DAYS3 || (DAYS3 = {}));
console.log(DAYS3.Sunday1);
console.log(DAYS3.sunday2);
var student;
(function (student) {
    student[student["Sadia"] = 0] = "Sadia";
    student[student["maria"] = 1] = "maria";
    student[student["fazila"] = 2] = "fazila";
    student[student["mahnoor"] = 3] = "mahnoor";
    student[student["sania"] = 4] = "sania";
    student[student["haroon"] = 5] = "haroon";
    student[student["mahenoor"] = 6] = "mahenoor";
    student[student["irha"] = 7] = "irha";
    student[student["adan"] = 8] = "adan";
})(student || (student = {}));
console.log(student[5]);
console.log(student["mahnoor"]);
var list;
(function (list) {
    list[list["tomato"] = 0] = "tomato";
    list[list["onion"] = 1] = "onion";
    list[list["garlic"] = 2] = "garlic";
    list[list["capsicum"] = 3] = "capsicum";
    list[list["potato"] = 4] = "potato";
    list[list["rice"] = 5] = "rice";
})(list || (list = {}));
console.log(list);
console.log(3 /* Direction.right */);
//console.log(Direction[0]) error because const enum cannot support reverse mapping
var Organs;
(function (Organs) {
    Organs[Organs["head"] = 0] = "head";
    Organs[Organs["body"] = 1] = "body";
    Organs[Organs["hands"] = 2] = "hands";
    Organs[Organs["foot"] = 3] = "foot";
})(Organs || (Organs = {}));
console.log(Organs);
console.log(Organs.hands);
console.log(Organs.body, Organs.head);
console.log(Organs[2]);
