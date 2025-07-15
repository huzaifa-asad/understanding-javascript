// Objects in JavaScript

const mySymbol = Symbol("uniqueIdentifier");

const person = {
    name : "Huzaifa",
    "full name": "Huzaifa Asad",
    age: 20,
    city: "Swabi",
    hobbies: ['reading', 'gaming', 'coding'],
    address: {
        street: "123 Main St",
        zip: "12345"
    },
    mySymbol: "uniqueId", // It will be give a string value, not a symbol
    [mySymbol]: "uniqueId"
}


console.log(person.name); // Accessing property using dot notation
console.log(person['full name']);
// console.log(person.full name);
console.log(person['age']); // Accessing property using bracket notation
console.log(person.hobbies[1]);
console.log(person.address.street); // Accessing nested object property
console.log(person[mySymbol]);
// console.log(person)

// changing values 
person.age = 21;
console.log(person.age);
// console.log(person)

// Freezing an object to prevent modifications
// Object.freeze(person);
person.age = 22;
console.log(person.age);
// console.log(person)

// Adding a function to an object
person.greetings = function() {
    return `Hello, my name is ${this.name}`;
}
console.log(person.greetings) // only shows the function definition
console.log(person.greetings());
console.log(person)