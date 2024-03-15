type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
}

// now lets cerate a new user with the name email and active status
let newUser: User = {
    _id: "12345",
    name: "harshit",
    email: "harshitemail.com",
    isActive: true
}

// now if we try to change the value of the newUser then we can easily change all the value inside the newUser except _id bcause it is radonly


newUser.name = "HARSHIT"
newUser._id = "8546"

// as you can see its showing an error

export { }