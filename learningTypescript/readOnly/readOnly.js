"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// now lets cerate a new user with the name email and active status
var newUser = {
    _id: "12345",
    name: "harshit",
    email: "harshitemail.com",
    isActive: true
};
// now if we try to change the value of the newUser then we can easily change all the value inside the newUser except _id bcause it is radonly
newUser.name = "HARSHIT";
newUser._id = "8546";
