// Reduce Method in JavaScript
// Reduce is a method available on arrays in JavaScript that allows you to reduce an array to a single value.
// It is often used for summing up values, concatenating strings, or transforming data structures

// The reduce method executes a reducer function (that you provide) on each element of the array,
// resulting in a single output value.

const myNums = [1, 2, 3];

const sumOfNums = myNums.reduce(function (accumulator, currentValue) {
    // console.log(`Acc: ${accumulator}, Current: ${currentValue}`);
    return accumulator + currentValue;
}, 0)
// console.log(sumOfNums);

const sumOfNumsArrow = myNums.reduce( (acc, current) => acc+current, 0 )
// console.log(sumOfNumsArrow)

const myCart = [
    {
        'courseName': 'JS course',
        'price': 3999
    },
    {
        'courseName': 'Python course',
        'price': 2999
    },
    {
        'courseName': 'Mobile dev course',
        'price': 7999
    },
    {
        'courseName': 'ML course',
        'price': 18999
    }
]

const cart = myCart.reduce( (acc, item) => acc+item.price, 0 )
console.log(cart);