// while loop

let i = 0;
while(i <= 10) {
    // console.log(`Value of i is ${i}`);
    i++;   
}

// while loop on array
myArray = ["huzaifa", "asad", "developer"];
let arr = 0;
while (arr < myArray.length) {
    // console.log(myArray[arr])
    arr = arr + 1;
}

// do-while loop
let score = 0
do {
    console.log(`Value of i is ${score}`);
    score = score + 1;
}while(score <= 10)


// do-while loop on array
myArr = ["huzaifa", "asad", "developer"];
let Index = 0;
do {
    // console.log(myArr[Index]);
    Index = Index + 1;
}while(Index < myArr.length);


// Skip the rest of the loop for this iteration
let index = 0;
do {
    index++; // Increment first to avoid infinite loop
    if (index === 2) {
        console.log(`Skipping number: ${index}`);
        continue;
    } else {
        console.log(`Value of index is ${index}`);
    }
} while (index <= 5);