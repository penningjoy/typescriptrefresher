type alphanumeric = string | number ;  // Creating a alias type ( wordornumber) with an union type. 

/*
    1. The never type contains no value.
    2. The never type represents the return type of a function that always throws an error or a 
       function that contains an indefinite loop.
*/

// Never type
function reject(){
    throw new Error('Rejected');
}

// String literal types
type FoodType = 'Vegetarian' | 'NonVegetarian' | 'Vegan';
let eveningsnacks: FoodType
eveningsnacks = 'Vegetarian'

