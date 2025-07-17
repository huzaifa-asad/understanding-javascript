// For of

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
    // console.log(i)
}

const greetings = "Hello World!";
for (const greet of greetings) {
    // to skip the space between Hello World
    if (greet === " ") {
        continue
    }
    // console.log(`Each char is ${greet}`)
}


// For in loop on array
const codeArr = ["js", "py", "rb", "cpp", "java"]

for (const key in codeArr) {
    console.log(codeArr[key]);
    
}