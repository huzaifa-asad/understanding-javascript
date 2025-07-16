// Understanding 'this' in JavaScript and Arrow Functions
const user = {
    username: "huzaifa",
    age: 20,
    welcomeMessage: function() {
        console.log(`Hello, ${this.username}! Welcome to the website.`);
        console.log(this) // (this) keyword refers to the context of the object
    }
}
// user.welcomeMessage();
// user.username = "Ali";
// user.welcomeMessage();

console.log(this); // In the global context, 'this' refers to the global object (window in browsers)

function showThis() {
    console.log(this); // In a regular function, 'this' refers to the global object
}
// showThis();

const chai = function() {
    let username = "huzaifa";
    console.log(this.username); // 'this' refers to the global object, so it will log 'undefined' since 'username' is not defined globally
}
// chai();

const chaiArrow = () => {
    let username = "huzaifa";
    console.log(this.username); // In an arrow function, 'this' is lexically bound, so it will still refer to the global object
}
// chaiArrow();

/* NOTE:
 Arrow functions do not have their own 'this', they inherit it from the parent scope. 
 This means that in an arrow function, 'this' will always refer to the context in which the arrow function was defined, not where it is called.
 This is why 'this' in an arrow function behaves differently than in a regular function.
 Arrow functions are not suitable for methods that need to use 'this' to refer to the object they belong to.
*/

// Arrow function in JavaScript
const addNum = (num1, num2) => {
    return num1 + num2;
}
console.log(addNum(5, 10));

// Arrow function with implicit return
// const implicitReturn = (num1, num2) => num1 + num2;
const implicitReturn = (num1, num2) => (num1 + num2);
console.log(implicitReturn(54, 23));

// to return an object from an arrow function, you need to wrap the object in parentheses
const returnObject = (name, age) => ({ name, age });
console.log(returnObject("Huzaifa", 20));
