// for of loop on object
const myObject = {
    'name': 'huzaifa',
    'age': 20,
    'status': 'bechara single'
}

// Using Object.entries() to get both key and value pairs
for (const [key, value] of Object.entries(myObject)) {
    // console.log(key, " => ", value)
}

// for in loop on object
const codeObj = {
    'JS': 'JavaScript',
    'md': 'Markdown',
    'rb': 'Ruby'
}
for (const key in codeObj) {
    console.log(`${key} => ${codeObj[key]}`)

}