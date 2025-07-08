"use strict";  // treat all JS code as newer version

// alert("Hello World!"); // we are using nodejs not browser, so this will not work

let accountName = "Huzaifazz"; // string
let accountBalance = 837465; // integer
let isLoggedIn = true; // boolean

// number => integer or float => 2 to power 53
// BigInt => for large integers
// string => text data
// boolean => true or false
// null => empty value
// undefined => variable declared but not assigned a value
// Symbol => unique and immutable value, often used as object property keys

console.log(typeof accountName); // string
console.log(typeof accountBalance); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof null); // object (this is a known bug in JavaScript)
console.log(typeof undefined); // undefined
