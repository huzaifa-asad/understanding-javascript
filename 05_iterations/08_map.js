const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nums = myNums.map((item) => item + 10)
// console.log(nums)

// Using return in map
const myNums2 = myNums.map((item) => {
    return item + 1
})
// console.log(myNums2)


// Using chaining methods
const newNums = myNums
    .filter((item) => item > 5)
// console.log(newNums);

const mappedNums = myNums
    .map((item) => item *10)
    .map((item) => item + 1)
console.log(mappedNums)
