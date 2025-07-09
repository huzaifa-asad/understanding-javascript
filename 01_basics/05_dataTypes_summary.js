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


//--------------------------------------------------------Memory------------------------------------------------------------

// Memory in JavaScript is managed automatically by the JavaScript engine, which uses a garbage collector to reclaim memory that is no longer needed.
// When a variable is created, memory is allocated for it. When the variable goes out of scope or is no longer referenced, the garbage collector will free up that memory.
// JavaScript uses a heap for dynamic memory allocation, which allows for the creation of complex data structures like objects and arrays.
// The memory model in JavaScript is based on the concept of "references" for non-primitive data types.
// Primitive data types are stored directly in the variable, while non-primitive data types are stored as references to their location in memory.
// This means that when you assign an object or array to a new variable, you are copying the reference, not the actual data.
// This can lead to unexpected behavior when modifying objects or arrays, as changes made to one reference will affect all references to that object or array.

// Stack (Primitive data types), Heap (Non-Primitive data types)

let myGithubName = "huzaifazz";
let anotherGithubName = myGithubName; // primitive data type, copied value
anotherGithubName = "huzaifa asad";

console.log(myGithubName);
console.log(anotherGithubName);

// Heap (Non-Primitive data types):
let myGithubObject = {
  name: "HUZAIFA ASAD",
  age: 20
};

let anotherGithubObject = myGithubObject; // non-primitive data type, copied reference
console.log(myGithubObject);
console.log(anotherGithubObject);

console.log("After Modifying:");

anotherGithubObject.name = "Web developer"; // modifying the object through another reference
console.log(myGithubObject);
console.log(anotherGithubObject);