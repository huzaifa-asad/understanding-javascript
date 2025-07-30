class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const userOne = new Teacher("hamza", "ham@fb.com", "34235")
userOne.addCourse()
userOne.logMe()

const userTwo = new User("huzaifa")
userTwo.logMe()

console.log(userTwo instanceof User); // true
console.log(userTwo instanceof Teacher); // false
console.log(userOne instanceof User); // true
console.log(userOne instanceof Teacher); // true
console.log(userOne === User); // false
console.log(Teacher === User); // false