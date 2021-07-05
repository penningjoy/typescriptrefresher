function grosscalculator(...prices:number[]){
    let gross: number = 0;
    prices.forEach((price) => gross += price);
    return gross;
}

let gross = grosscalculator(10.20, 20.20, 30.10, 20.30);
console.log(gross);