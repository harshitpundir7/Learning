"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this is how we us the aliases in the function
function createUser(user) { }
createUser({ name: " ", email: " ", isActive: true });
// now w have to defined the function return type like this
function newUser(user) {
    return ({ name: "", email: " ", isActive: true });
}
