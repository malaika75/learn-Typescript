// enum me ye FIRST capital letters me likhna prefare kia jata hy , enums me key se index or index se key ko get kr sakty, STRING ky case me enum ki values set krna zaroori hy 
enum Days {
    Monday,
    Tuesday,
    Wednesday,

}
console.log (Days["WEDNESDAY"])
console.log (Days[0])

enum Days2 {
    THURSDAY = 2,
    FRIDAY,
    SATURDAY,

}

enum DAYS3 {
    Sunday1 = "Sunny Weather",
    sunday2 = "Rainy Weather",
    sunday3 = "Dry Weather" ,
}
console.log(DAYS3.Sunday1)
console.log(DAYS3.sunday2)

enum student {
    Sadia,
    maria,
    fazila,
    mahnoor,
    sania,
    haroon,
    mahenoor,
    irha,
    adan

}
console.log(student[5])
console.log (student["mahnoor"])

enum list {
    tomato,
    onion,
    garlic,
    capsicum,
    potato,
    rice,
}
console.log (list)

const enum Direction {
    up,
    down,
    left,
    right
}
console.log(Direction.right)
//console.log(Direction[0]) error because const enum cannot support reverse mapping

enum Organs {
    head,
    body,
    hands,
    foot,
}
console.log(Organs)
console.log(Organs.hands)
console.log(Organs.body,Organs.head)
console.log(Organs[2])