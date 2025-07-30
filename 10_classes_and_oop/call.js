function setUsername(username){
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const newUser = new createUser("huzaifa", "h@gmail.com", "32452")
console.log(newUser);
