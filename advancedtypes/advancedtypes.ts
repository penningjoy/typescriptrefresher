let numA = 1

if(typeof numA === 'number' ){
    console.log(`it's a number`);
}

//intersection

interface food {
    vegetables:string[]
}

interface drink {
    waterquantity:number
}

type soup = food & drink; // soup now contains all properties of food and drink.

//unions
type latenightsnack = food | drink ; // Either food or drink


//type assertion
let a = ( 88.00 * 2 ) as number