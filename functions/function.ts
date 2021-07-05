let factorial = function(num: number){
    let result: number = 1;
    if( num < 0 ){
        result = null;
    }
    else if(num == 0 || num == 1){
        result = 1;
    }
    else{
        for(let i=1; i<=num; i++){
            result = result * i;
        }
    }
    return result;
}

console.log(`The factorial of 6 is ${factorial(6)}`);