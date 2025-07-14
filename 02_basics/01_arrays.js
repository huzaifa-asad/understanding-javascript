// Understanding JavaScript Arrays
const myArray = [1, 2, 3, 4, 5];
console.log(myArray);
console.log(myArray.length);

const myArray2 = new Array(6, 7, 10, "huzaifa", true, null);
console.log(myArray2[3]);
console.log(typeof myArray2);

// Array methods
const myArr = [1, 2, 3, 4, 5];
myArr.push(3); // adds an element to the end
console.log(myArr);

myArr.push(7);
console.log(myArr);

myArr.unshift(0); // adds an element to the beginning
console.log(myArr);

myArr.pop(); // removes the last element
console.log(myArr);

myArr.shift(); // removes the first element
console.log(myArr);

myArr.splice(2, 1); // removes one element at index 2
console.log(myArr);

myArr.splice(2, 0, 10); // adds 10 at index 2
console.log(myArr);

myArr.reverse(); // reverses the array
console.log(myArr);

console.log(myArr.indexOf(10)); // finds the index of 10
console.log(myArr.includes(10)); // checks if 10 is in the array

const mnewArr = myArr.join();
console.log(mnewArr);

// Slice and Splice
console.log("A :", myArr);
const sliceArr = myArr.slice(1, 3);
console.log(sliceArr); // slices the array from index 1 to 3
console.log("B :", myArr);

const spliceArr = myArr.splice(1, 3); // removes elements from index 1 to 3
console.log("C :", myArr);
console.log(spliceArr); // returns the removed elements