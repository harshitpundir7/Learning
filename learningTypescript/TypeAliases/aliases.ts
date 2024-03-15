type User = {
    name: string,
    email: string,
    isActive: boolean
}
// this is how we us the aliases in the function
function createUser(user: User){}

createUser({name: " ", email: " ", isActive: true})

// now w have to defined the function return type like this

function newUser(user: User):User{
    return ({name: "", email: " ", isActive: true})
}
















export{}