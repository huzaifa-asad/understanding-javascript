console.log("Let's see the comparison of numbers");
console.log(2 > 3);
console.log(2 < 3);
console.log(2 > "3");
console.log("2" < 3);
console.log("2" >= 2); // string "2" is converted to number 2

console.log("Let's see the comparison of null");
console.log(null == undefined);
console.log(null === undefined);  // == checks value, === checks value and type
console.log(null == 0, null >= 0, null < 0);

console.log("Let's see the comparison of undefined");
console.log(undefined == null);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);

console.log("Let's see the comparison of boolean");
console.log(true == 1);
console.log(true === 1);
console.log(true == "1"); // true is converted to 1, "1" is converted to 1, so they are equal
console.log(true == "true"); // true is converted to 1, "true" is converted to NaN, so they are not equal
console.log(false == 0); 
console.log(false === 0);
console.log(false == "0"); // false is converted to 0, "0" is converted to 0, so they are equal
console.log(false == "false"); // false is converted to 0, "false" is converted to NaN, so they are not equal


console.log("Let's see the comparison of strings");
console.log("apple" < "banana"); // compares lexicographically 
console.log("apple" > "banana"); // compares lexicographically
console.log("apple" == "apple"); // true
console.log("apple" === "apple"); // true
console.log("apple" == "Apple"); // false, case-sensitive comparison
console.log("apple" === "Apple"); // false, case-sensitive comparison
console.log("apple" == "apple " + "banana"); // false, "apple" is not equal to "apple banana"