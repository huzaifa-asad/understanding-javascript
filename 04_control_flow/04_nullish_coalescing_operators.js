// Nullish Coalescing Operator (??)

let value1 = null;
let value2 = "Default Value";
let result = value1 ?? value2;
console.log(result); // This will log "Default Value" because value1 is null

// Example with undefined
let value3;
let value4 = 33;
result = value3 ?? value4;
console.log(result); // This will log 33 because value3 is undefined

// Example with both null and undefined
let value5 = null;
let value6 = undefined; 
result = value5 ?? value6;
console.log(result); // This will log undefined because both values are nullish

// Example with a non-nullish value
let value7 = "Huzaifa";
let value8 = "Asad";
result = value7 ?? value8;
console.log(result); // This will log "Hello" because value7 is not nullish

// Example with a number
let value9 = 0; // 0 is a falsy value but not nullish
let value10 = 100;
result = value9 ?? value10;
console.log(result); // This will log 0 because 0 is not nullish, even though it's falsy

// Example with a boolean
let value11 = false; // false is a falsy value but not nullish
let value12 = true;
result = value11 ?? value12;
console.log(result); // This will log false because false is not nullish

// Example with an empty string
let value13 = ""; // Empty string is a falsy value but not nullish
let value14 = "Non-empty string";
result = value13 ?? value14;
console.log(result); // This will log "" because empty string is not nullish

// Example with an array
let value15 = []; // Empty array is a truthy value but not nullish
let value16 = [1, 2, 3];
result = value15 ?? value16;
console.log(result); // This will log [] because empty array is not nullish

// Example with an object
let value17 = {}; // Empty object is a truthy value but not nullish
let value18 = { key: "value" };
result = value17 ?? value18;
console.log(result); // This will log {} because empty object is not nullish

// Example with a function
let value19 = function() {}; // Function is a truthy value but not nullish
let value20 = () => "Hello";
result = value19 ?? value20;
console.log(result); // This will log the function because it's not nullish

