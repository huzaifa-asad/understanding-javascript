console.log("Understanding JavaScript: Lesson 1");

// Variable Declaration
const accountName = "Huzaifazz";
let accountBalance = 837465;
accountCity = "Swabi"
var accountState;

// accountName = "Hamza";   // const variable cannot be reassigned
accountBalance = 1000000;  // let variable can be reassigned 
console.log("Account Name:", accountName, "Account Balance:", accountBalance, "Account City:", accountCity);

// table containing all the variables
console.table({ accountName, accountBalance, accountCity, accountState });

/* NOTE:
    - Use const for variables that should not change
    - Use let for variables that can change
    - Avoid using var as it has function scope and can lead to unexpected behavior
    - Use camelCase for variable names
    - Use meaningful names for variables
    - Use console.table() to display objects in a table format
*/
