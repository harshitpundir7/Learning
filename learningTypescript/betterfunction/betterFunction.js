// as we see in the previous function how to define the function in TYpescript but thre is another better method to write the function in the typescrip which is
function addOne(num) {
    return num + 2;
}
// in this we also defined the type of value function returning
// how to do this same in the aarrow function
var getUpper = function (s) {
    return "";
};
// ----------------------------------------------------------------------
var heros = ["thor", "ironman", "Captain America"];
heros.map(function (hero) {
    return "the hero is ".concat(hero);
});
// typescript is smart enough that if you hover on the hero it automatically show you th type of the hero there is no need to define the type of the array
// but although we use the perfect syntax which is this
var hero = ["thor", "ironman", "Captain America"];
heros.map(function (hero) {
    return "the hero is ".concat(hero);
});
// some functions never returns the value for them we use
function fail(error) {
    throw new Error(error);
}
;
// and if we just wants to console the errors then 
function catchError(err) {
    console.log(err);
}
;
