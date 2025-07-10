// Numbers and Math in JavaScript
const score = 500;
console.log(score)

// declaring a number using the Number constructor
// Note: It's not recommended to use the Number constructor for primitive numbers, but it's useful for creating Number objects.
const anotherScore = new Number(100);
const balance = new Number(1000);
console.log(balance);

// Number to String and Fixed method:
console.log(balance.toString());
console.log(balance.toFixed(2)); // converts the number to a string with 2 decimal places

// Precision:
const anotherNumber = 231.656789;
console.log(anotherNumber.toPrecision(3)); // converts the number to a string with 3 significant digits

// big number to proper format:
const salary = 21000000;
console.log(salary.toLocaleString()); // by default it will convert to US format
console.log(salary.toLocaleString('en-IN'));

// ---------------------------------MATH------------------------------------------

// Math object in JavaScript
console.log(Math.PI); // returns the value of PI
console.log(Math.min(6, 3, 2, 7, 5));
console.log(Math.max(6, 3, 2, 7, 5));

console.log(Math.random()); // returns a random number between 0 and 1
console.log(Math.floor(3.9)); // rounds down to the nearest integer
console.log(Math.ceil(3.1)); // rounds up to the nearest integer

console.log(Math.round(3.5)); // rounds to the nearest integer
console.log(Math.sqrt(16)); // returns the square root of a number

console.log(Math.pow(2, 3)); // returns the power of a number (2 raised to the power of 3)
console.log(Math.abs(-5)); // returns the absolute value of a number
console.log(Math.sign(-5)); // returns -1 for negative numbers, 0 for zero