console.log("Let's see the conversion of string to number");
let score1 = "44abc"
console.log(typeof score1);
console.log(typeof (score1))

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

console.log("Let's see the conversion of null to number");
let score2 = null
console.log(typeof score2);
console.log(typeof (score2))

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

console.log("Let's see the conversion of undefined to number");
let score3 = undefined
console.log(typeof score3);
console.log(typeof (score3))

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

console.log("Let's see the conversion of string to number with valid string");
let score4 = "huzaifa"

console.log(typeof score4);
console.log(typeof (score4))

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

console.log("Let's see the conversion of boolean to number");
let score5 = true
console.log(typeof score5);
console.log(typeof (score5))

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);
console.log(valueInNumber5);


/* Simple Note:
"44" => 44
"44abc" => NaN (Not a Number)
true => 1
false => 0
"huzaifa" => NaN (Not a Number)
"null" => 0
"undefined" => NaN (Not a Number)
*/

console.log("Let see the conversion of boolean");
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);