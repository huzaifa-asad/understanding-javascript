// Ternary Operator in JavaScript
// The ternary operator is a shorthand for if-else statements

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

// Example with a variable
const price = 120;
const message = price <= 100 ? "Price is affordable" : "Price is too high";
console.log(message);

// Example with a function call
const isAffordable = (price) => price <= 100 ? "Affordable" : "Too expensive";
console.log(isAffordable(90));

// Example with a complex condition
const userAge = 20;
const canVote = userAge >= 18 ? "User can vote" : "User cannot vote";
console.log(canVote);

// Example with a nested ternary operator
const userRole = "admin";
const accessLevel = userRole === "admin" ? "Full Access" : userRole === "user" ? "Limited Access" : "No Access";
console.log(accessLevel);

// Example with a function returning a value
const checkEvenOdd = (num) => num % 2 === 0 ? "Even" : "Odd";
console.log(checkEvenOdd(5)); // This will log "Odd"
