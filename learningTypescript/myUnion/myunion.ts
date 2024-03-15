// in this section we study that when we don't know about the data type what is coming and what is not then we will use union type instead of using any

let score: number | string;
score = 85;
score = "96"

type User = {
    name: string,
    id: number
}
type Admin = {
    usrname: string,
    id: number
}

let hitesh: User | Admin = {
    name: "harshit",
    id: 8547
};

hitesh = {
    usrname: "harshitpundir",
    id: 32764
};


function getId(id: string | number){
    console.log(`this is ${id}`);
};

getId(2);
getId("4");


function conditionalId(id: string | number){
    if(typeof id === "string"){
        id.toUpperCase();
    }
};

conditionalId("fjwkbuwwhiuwrhuiw");
conditionalId(58)


let arr : (string | number | boolean)[] = [1,"hello", true, 5464, "harshit"];

export{}