// For Each loop
const code = ["js", "python", "ruby", "cpp", "java", "golang", "kotlin"]

code.forEach(function (items) {
    // console.log(items); 
})

// for each with arrow funstion
code.forEach( (items) => {
    // console.log(items);
})

// to make simple function first and then give its reference to forEach
function showArr(item) {
    // console.log(item);
}
code.forEach(showArr)

code.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
} )

// forEach with array of objects
coding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    }

]
coding.forEach( (item) => {
    console.log(item.languageName);  
})