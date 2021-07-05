interface fullName{
    first:string,
    last:string,
}
interface Json{
    toJson():string
}

class Human implements Json{
    constructor(private name:fullName){}

    toJson(): string {
        return JSON.stringify(this);
    }
}

let fullname:fullName = {
    first: 'Charlie',
    last:'Chaplin'
}

let human = new Human(fullname);

let json = human.toJson();

console.log(json)