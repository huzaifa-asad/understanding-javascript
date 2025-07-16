// Imediately Invoked Function Expression (IIFE)
// An IIFE is a function that runs as soon as it is defined
// This is useful for organizing code and avoiding global scope pollution

(function greetUser() {
    console.log("Hello, User!");
})(); // This will log "Hello, User!" immediately

// IIFEE in Arrow Function
( () => {
    console.log("Hello from an arrow function IIFE!");   
} )();

// IIFE with parameters
(function addNumbers(num1, num2) {
    console.log(`The sum is: ${num1 + num2}`);
})(5, 10); // This will log "The sum is: 15"

// IIFE with Arrow Function and parameters
( (username) => {
    console.log(`Hello ${username} from an arrow function IIFE!`);   
} )('Huzaifa');

// IIFE with return value
const result = (function multiplyNumbers(num1, num2) {
    return num1 * num2;
})(5, 10); // This will return 50
console.log(`The result of multiplication is: ${result}`);

// IIFE with an object
(function handleObject(obj) {
    console.log(`Username: ${obj.username}, Age: ${obj.age}`);
})({ username: "Huzaifa", age: 20 });

// IIFE with an array
(function handleArray(arr) {
    console.log(`Array length: ${arr.length}`);
})([1, 2, 3, 4, 5]);

// Two IIFEs in one file
(function firstIIFE() {
    console.log("This is the first IIFE.");
})();
(function secondIIFE() {
    console.log("This is the second IIFE.");
})();
