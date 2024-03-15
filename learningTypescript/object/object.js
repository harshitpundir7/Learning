var User = {
    name: "Harshit",
    email: "hrshit@gmail.com",
    isActive: true
};
// we just created a user in which we just pass the two params  but lets talk about the bad behaviour of the typescript which is i can insert as many params as i want by this
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
;
var newUser = { name: "harshit", email: "harshitgmail", isPaid: false };
createUser(newUser);
// as you can see i can easily insert the email params this is the bad behaviour of the objects
// -----------------------------------------------------------------
function createCours() {
    return { name: "harshit", email: "harshitemail", isPaid: false };
}
;
// this syntax might b confusing but it is what it is
