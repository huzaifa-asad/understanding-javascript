// Getter and Setter using Class based / Modern

class User {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    get username() {
        return this._username.toUpperCase()
    }

    set username(value) {
        this._username = value
    }

    get password() {
        return `${this._password}huzaifa`
    }

    set password(value) {
        this._password = value
    }
}

const userOne = new User("admin", "abcd")
console.log(userOne.username);
console.log(userOne.password);
