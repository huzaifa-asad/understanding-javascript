// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

const chai = {
    name: "ginger chai",
    price: 320,
    isAvailable: true
}
console.log(chai);

const chaiDescriptor = Object.getOwnPropertyDescriptor(chai, "name")
console.log(chaiDescriptor)

// Edit or change the property description
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
