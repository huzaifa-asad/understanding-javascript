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

coding = [
    {
        languageName: "JavaScript",
        languagefile: "js"
    },
    {
        languageName: "python",
        languagefile: "py"
    },
    {
        languageName: "Ruby",
        languagefile: "rb"
    }

]
coding.forEach( (item) => {
    console.log(item.languageName);  
})