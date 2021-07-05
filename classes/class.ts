// -- Abstract Class
abstract class Student{

    constructor(private firstName:string, private lastName:string){}
    abstract getHours(): number;

    getFullname(): string{
        return `${this.firstName}  ${this.lastName}`
    }
}

// -- Concrete Class
class FulltimeStudent extends Student{

    private static NUMBEROFHOURS = 32;

    constructor(firstName: string, lastName:string) {
        super(firstName,lastName);
    }
   
    getHours(): number{
        return FulltimeStudent.NUMBEROFHOURS;
    }

    getDaysinWeek(): number{
        return 5;
    }
}


// -- Calling
let students = new FulltimeStudent('Mickey', 'Mouse');

console.log(students.getFullname());
console.log(students.getDaysinWeek());
console.log(students.getHours());
