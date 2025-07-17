// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        // console.log(`${i} is even`);
    } else {
        // console.log(`${i} is odd`);
    }
}

// Nested for loop
for (let i = 0; i <= 10; i++) {
    // console.log(`OUTER LOOP: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`INNER LOOP ${j} of Outer loop: ${i}`); 
    }
}

// For loop on array
let myArray = ['huzaifa', 'asad', 'developer']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// For loop with array of objects
const users = [
    { name: 'Huzaifa', age: 20 },
    { name: 'Asad', age: 22 },
    { name: 'Ali', age: 25 }
];
for (let index = 0; index < users.length; index++) {
    const user = users[index];
    console.log(`User Name: ${user.name}, Age: ${user.age}`);
}

// Use of (break) in for loop
for (let index = 1; index <= 10; index++) {
    if (index === 5) {
        // console.log(`Detected number: 5`);
        break;
    }
    // console.log(`Value of i is ${index}`);
    
}

// Use of (continue) in for loop
// continue is used to skip the current iteration of the loop
for (let index = 0; index <= 10; index++) {
    if (index === 5) {
        console.log(`Detected number: 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}

