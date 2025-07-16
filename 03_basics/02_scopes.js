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

// Function Scope
function one() {
    let username = "Huzaifa";
    
    function two() {
        let website = "youtube";
        console.log(username);
    }
    // console.log(website); // This will throw an error because 'website' is not defined in this scope
    two();
}
one();

if (true) {
    const username = "huzaifa";

    if(username === "huzaifa") {
        const website = " youtube";
        console.log(username + website); // This will log "huzaifa youtube"
    }
}

// Hoisting in JavaScript

console.log(addone(5)); // This will log 6 because 'addone' is hoisted
// console.log(addtwo(5)); // This will throw an error because 'addtwo' is not hoisted

function addone(num) {
    return num + 1;
}
// Function expressions are not hoisted
// So this will throw an error if called before declaration
const addtwo = function(num) {
    return num + 2;
}

