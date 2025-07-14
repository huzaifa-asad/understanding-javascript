let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString);
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate); // object

let myCreatedDate = new Date(2024, 0, 5); // January is 0
console.log(myCreatedDate.toDateString());

let myCreatedDateTime = new Date(2024, 2, 5, 10, 50);
console.log(myCreatedDateTime.toLocaleString());

let myFormattedDate = new Date("2023-6-14")
console.log(myFormattedDate.toLocaleString()); 

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now() - myCreatedDate.getTime()); // difference in milliseconds
console.log(Math.floor(Date.now() / 1000)); // current timestamp in seconds

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString("default", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
})

console.log(newDate.toLocaleString("default", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
})); // formatted date with weekday, year, and month

