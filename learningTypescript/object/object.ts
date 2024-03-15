const User ={
    name: "Harshit",
    email: "hrshit@gmail.com",
    isActive: true
};
// we just created a user in which we just pass the two params  but lets talk about the bad behaviour of the typescript which is i can insert as many params as i want by this

function createUser({name: string, isPaid: boolean}){};

let newUser = {name: "harshit", email: "harshitgmail", isPaid: false};

createUser(newUser);

// as you can see i can easily insert the email params this is the bad behaviour of the objects


// -----------------------------------------------------------------

function createCours():{name:string, email:string, isPaid: boolean}{
    return {name: "harshit", email:"harshitemail", isPaid: false}
};

// this syntax might b confusing but it is what it is


// currently i am using this export{} so that the error can go but i will disscus what it is further
export{}
