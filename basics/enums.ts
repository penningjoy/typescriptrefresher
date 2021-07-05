enum Week {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
}

function isitMidweek(week: Week) {
    let isMidweek: boolean = false;
    switch(week){
        case Week.Monday:
            isMidweek = false;
            break;
        case Week.Tuesday:
            isMidweek = false;
            break;
        case Week.Wednesday:
            isMidweek = true; 
            break;
        case Week.Thursday:
            isMidweek = true;
            break;
        case Week.Friday:
            isMidweek = false;
            break;
        default:
            isMidweek = false;
            break;
    }
    return isMidweek;
}

console.log(isitMidweek(Week.Monday));

/* -- Another practical example -- */

const GOODBOY = true;
const BADBOY = false;

enum ChristmasPresentStatus {
    Pending,
    Approved,
    Rejected
}

let joydeep =  GOODBOY

if(joydeep == GOODBOY){
    console.log(`Joydeep's christmas is ${ChristmasPresentStatus.Approved}`);
}