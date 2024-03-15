// as we see in the previous function how to define the function in TYpescript but thre is another better method to write the function in the typescrip which is
function addOne(num:number) :number{
    return num +2;
}
// in this we also defined the type of value function returning
// how to do this same in the aarrow function

const getUpper = (s: string):string =>{
    return "";
};

// ----------------------------------------------------------------------


const heros =["thor", "ironman", "Captain America"];

heros.map((hero)=>{
    return `the hero is ${hero}`
});

// typescript is smart enough that if you hover on the hero it automatically show you th type of the hero there is no need to define the type of the array
// but although we use the perfect syntax which is this

const hero =["thor", "ironman", "Captain America"];

heros.map((hero): string =>{
    return `the hero is ${hero}`
});

// some functions never returns the value for them we use

function fail(error: string):never{
    throw new Error(error);
};

// and if we just wants to console the errors then 
function catchError(err:string):void{
    console.log(err);
};