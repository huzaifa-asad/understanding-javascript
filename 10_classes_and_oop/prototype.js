let myName = "Huzaifa       "

// console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.huzaifa = function(){
    console.log(`huzaifa is present in all objects`);
}

heroPower.huzaifa()
myHeros.huzaifa()

// Inheritance
const User = {
    name: "huzaifa",
    email: "huzaifa@gmail.com"
}
const teacher = {
    makeVideo: false
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)

// let's make trueLength
let anotherUser = "huzaifa     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.anotherUser}`);
    console.log(`The true length is ${this.trim().length}`);
}
anotherUser.trueLength()
"Developer   ".trueLength()
