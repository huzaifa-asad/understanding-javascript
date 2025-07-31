// Getter and Setter using Properties based

function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase()
        },
        set: function(value) {
            this._password = value
        }
    })
}

const userOne = new User("h@google.com", "hkasjdaksjed")
console.log(userOne.email);
console.log(userOne.password);
