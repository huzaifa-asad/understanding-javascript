const name = "huzaifa";
const repoCount = 10;
console.log("Hello " + name + ", you have " + repoCount + " repositories."); // its not a good way to concatenate strings
console.log(`Hello ${name}, you have ${repoCount}, repositories.`); // this is a better way to concatenate strings using template literals

// another way to declare strings
const gameName = new String("pubgmobile"); // this is not recommended as it creates an object instead of a primitive string
console.log(gameName); // String { 'pubgmobile' }

console.log(gameName[4])
console.log(gameName.__proto__); // this will give you the prototype of the string object
console.log(gameName.__proto__ === String.prototype); // true, this means gameName is an instance of String
console.log(gameName instanceof String); // true, this means gameName is an instance of String
console.log(typeof gameName); // object, because gameName is an instance of String object
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("g"));

//substring
console.log("Let's see substring and slice methods");
const newString = gameName.substring(0, 4); // this will return the substring from index 0 to index 5 (not inclusive)
console.log(newString);

const anotherString = gameName.slice(-8, 6);
console.log(anotherString);

// remove whitespace
console.log("Let's see how to remove whitespace from a string");
const stringWithWhitespace = "          Huzaifa   ";
console.log(stringWithWhitespace);
console.log(stringWithWhitespace.trim());

const url = "https://www.github.com/huzaifa  zz";
console.log(url.replace("  ", ""));

console.log(url.includes("khan"));
console.log(gameName.split("m"));