// Truthy and Falsy values in JavaScript

const userEmail = [];

if (userEmail) {
    console.log("Got user email");  
}else {
    console.log("Don't have user email");  
}
// This will log "Got user email" because an empty array is considered truthy
// to check if the array is empty, you would need to check its length
if (userEmail.length === 0) {
    console.log("Don't have user email");  
}


// Falsy values: false, 0, "", null, undefined, NaN 
const userAge = 0;
if (userAge) {
    console.log("User age is set.");
}else {
    console.log("User age is not set."); // This will execute because 0 is falsy
}

// Truthy values: true, 1, "string", [], {}, function() {}
const userName = "John";
if (userName) {
    console.log("User name is set."); // This will execute because non-empty string is truthy
} else {
    console.log("User name is not set.");
}

// Check for Objects
const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty"); // This will execute because the object has no keys
}

// Check for empty string
const emptyString = "";
if (emptyString) {
    console.log("String is not empty.");
}else {
    console.log("String is empty"); // This will execute because an empty string is falsy
}

// Check for Function
const myFunction = function() {};
if (myFunction) {
    console.log("Function is defined."); // This will execute because functions are truthy
} else {
    console.log("Function is not defined.");
}

// Check for arrow function
const myArrowFunction = () => {};
if (myArrowFunction) {
    console.log("Arrow function is defined."); // This will execute because arrow functions are truthy
} else {
    console.log("Arrow function is not defined.");
}