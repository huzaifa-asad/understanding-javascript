// Primitive data types or (simple data types):
// These are the basic data types in JavaScript that are not objects and have immutable values.
 
/*
  1. string 2. number 3. boolean 4. null 5. undefined 6. BigInt 7. Symbol
*/

// Non-primitive data types or (complex data types) or (reference data types):
// These are data types that are objects and can hold collections of values and more complex entities.
// They are mutable and can be changed after creation.

/*
  1. object 2. array 3. function
*/

// One of primitive data types is Symbol let's see how it works:
// Symbol is a unique and immutable data type introduced in ES6 (ECMAScript 2015).
let id = Symbol("1234");
console.log(typeof id); // symbol
console.log(id); // Symbol(1234)

let id2 = Symbol("1234");
console.log(id === id2); // false, symbols are unique even with the same description
console.log(id.toString()); // Symbol(1234)


// One of the primitive data types is BigInt let's see how it works:
// BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive.

let bigIntValue = 45678901234567890n; // using 'n' at the end to denote BigInt
console.log(typeof bigIntValue); // bigint
console.log(bigIntValue); // 45678901234567890n
