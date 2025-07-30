class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId() {
        console.log(`${34234}`);
    }
}

const userOne = new User("hamza")
userOne.logMe()

// Static method usage
// userOne.createId() // This will not work, as createId is a static method
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }

}

const userTwo = new Teacher("hamza", "hu@google.com")
userTwo.logMe()
// userTwo.createId() // This will not work, as createId is a static method

// how to call static method
User.createId() // This will work, as createId is a static method of User class
// Static methods are called on the class itself, not on instances
// Static methods are not available on instances of the class
// Static methods are used for utility functions that are related to the class but do not require an instance
