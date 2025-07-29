// Object literal
const user = {
    username: "huzaifa",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        // this keyword will print the current context
        console.log(this);
    }
}

// console.log(user.getUserDetails());

// Constructor function
function User(username, loginCount, isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn
    // return this; // Not needed, as 'this' is returned by default in constructor functions
    return this
}

// Use new keyword to create an instance of User. 
// Without new, it will override the first User
const userOne = new User("huzifa", 21, true)
const userTwo = new User("Developer", 32, false)
console.log(userOne);
console.log(userTwo);

// check
console.log(userOne instanceof User); // true or false
console.log(userTwo instanceof User);
console.log(user instanceof User); // false, as user is an object literal, not an instance of User constructor
console.log(userOne instanceof Object); // true, as all objects in JS are instances of Object
console.log(userTwo.constructor); // User, as userTwo is an instance of User constructor


