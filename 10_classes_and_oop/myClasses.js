class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new User("huzaifa", "h@gmail.com", "3453")
console.log(newUser.encryptPassword())
console.log(newUser.changeUsername())

// Behind the scene

function UserOne(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

UserOne.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

UserOne.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new UserOne("talha", "t@gmial.com", "4352")
console.log(userTwo.encryptPassword())
console.log(userTwo.changeUsername())