// this is the simple way how we can define the array in the typrscript
const superHero : string[]=[];
superHero.push("CaptainAmerica");


//  now we just define the type of the user and going to use it in generating the array
type User = {
    name: string,
    isActive: boolean
}
// this is how we can define the new array

const userData: User[]= [];

//  this is how we can insert th value in the userData

userData.push({ name: "", isActive:true});

// here w have another thing for 2D arrays which is 

const userNumber : number[][]= [];



// thank you


export{}