// Scopes in JavaScript

// Global Scope
let a = 10;
const b = 20;
var c = 300;

// Block Scope
if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("INNER a, b: ", a, b); // This will log the inner 'a, b' because its block-scoped
}
// console.log(a); // This will log the outer 'a' because 'let' is block-scoped
// console.log(b); 
console.log(c);
