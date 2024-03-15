"use strict";
// in this section we study that when we don't know about the data type what is coming and what is not then we will use union type instead of using any
Object.defineProperty(exports, "__esModule", { value: true });
var score;
score = 85;
score = "96";
var hitesh = {
    name: "harshit",
    id: 8547
};
hitesh = {
    usrname: "harshitpundir",
    id: 32764
};
function getId(id) {
    console.log("this is ".concat(id));
}
;
getId(2);
getId("4");
function conditionalId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
;
conditionalId("fjwkbuwwhiuwrhuiw");
conditionalId(58);
var arr = [1, "hello", true, 5464, "harshit"];
