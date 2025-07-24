myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNums = myArr.forEach((item) => {
    return item
})
// console.log(myNums); // This will log undefined because forEach does not return a new array

const nums = myArr.filter((item) => {
    return item
})
// console.log(nums);

// forEach loop
// to return a new array you will need an empty array and push items into it
const newNums = [];
myArr.forEach((item) => {
    newNums.push(item)
})
console.log(newNums);
