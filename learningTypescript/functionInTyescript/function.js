function addOne(num) {
    return num + 1;
    ;
}
function getUpper(val) {
    return val.toUpperCase();
}
;
function signup(name, email, isPaid) { }
function login(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
// this is how we declare the value in the function
signup("harshit", "harshit@gamil.com", true);
// now in the function login we just wants to us only two value girst one is name and second is email so for that we have to ytake some changes in the login function
login("harshit", "harshit@gmail.com");
getUpper("harshit");
addOne(89);
