const promiseOne = new Promise(function(resolve, reject){
    // Do an Async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two is completed");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Promise Two Consumed");
})

const promiseTree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Huzaifa", email: "huziafa@gmail.com"})
    }, 1000)
    
})

promiseTree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({account: "Github", password: "1234"})
        } else {
            reject("ERROR: Something went wrong");    
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({account: "LinkedIn", password: "9876"})
        } else {
            reject("ERROR: JS went wrong");    
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/huzaifazz')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/huzaifazz')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));
