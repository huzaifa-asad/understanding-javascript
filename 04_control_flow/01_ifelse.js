// Logic Control Flow
// This code demonstrates the use of if-else statements in JavaScript

const temp = 41;
if (temp < 40) {
    console.log("It's a cool day.");  
}else {
    console.log("It's a hot day.");
}

const balance = 1000;
if (balance > 500) console.log("test"); // oneline if statement
else console.log("test2"); // oneline else statement

// Nested if-else statements
if (balance < 500) {
    console.log("Balance is less than 500.");
}else if (balance < 750) {
    console.log("Balance is less that 750.");
}else if (balance < 950) {
    console.log("Balance is less than 950.");
}else {
    console.log("Balance is less than 1200.");
}


const userLoggedIn = true;
const debitCart = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if (userLoggedIn && debitCart) {
    console.log("User is logged in, Proceed to checkout.");
} 

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("User is logged in");
} else {
    console.log("User is not logged in.");
}