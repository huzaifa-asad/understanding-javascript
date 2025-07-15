const tinderUser = new Object();

tinderUser.name = "huzaifazz";
tinderUser.age = 20;
tinderUser.id = "123abx";
tinderUser.isloggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "user@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Huzaifa",
            lastName: "Asad"
        }
    }
}
// console.log(regularUser.email);
// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// const obj4 = {obj1, obj2, obj3};
// const obj4 = Object.assign(obj1, obj2, obj3);
// console.log(obj1 === obj4);
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj1 === obj4);
// console.log(obj4);

// using spread operator
const obj5 = {...obj1, ...obj2, ...obj3};
console.log(obj5);

// to access only keys and values of an object
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// to check for a specific property in an object
// console.log("name" in tinderUser); // OR
console.log(tinderUser.hasOwnProperty("isloggedIn"));

// Object destructuring

const course = {
    courseName: "Understanding JavaScript",
    price: 999,
    courseInstructor: "Huzaifa Asad",
}
// course.courseInstructor

const {courseInstructor: instructor} = course; // destructuring assignment
// console.log(courseInstructor);
console.log(instructor);