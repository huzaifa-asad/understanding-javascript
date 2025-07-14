// Arrays in JavaScript

const heros = ['Batman', 'Superman', 'Wonder'];
const pakistan = ['Karachi', 'Lahore', 'Islamabad'];

heros.push(pakistan);
// console.log(heros);
console.log(heros[3][1]); // Accessing 'Lahore' from the nested array

// cancat method
// const allHeros = heros.concat(pakistan);
// console.log(allHeros);

// Spread operator
const allHeros = [...heros, ...pakistan]
console.log(allHeros);

const newArr = [1, 2, 3,[4, 5, 6],7, [6, 7, [4, 5]]]
const flatArr = newArr.flat(Infinity); // Flattens the array to a single level
console.log(flatArr);

// Checking if an array is an array
console.log(Array.isArray("huzaifa"));
// converting a string to an array
console.log(Array.from("huzaifa"));
console.log(Array.isArray(newArr)); // true

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4)); // Creates an array from the arguments