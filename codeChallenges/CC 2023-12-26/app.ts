// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.



export const isLeap = (year: number): boolean => {
    // if year is divisible by 400 return true
    if ( year % 400 === 0 ) return true;

    // if year is divisible by 4 and not 100 return true
    if ( year % 4 === 0 && year % 100 !== 0 ) return true;

    // else return false
    else return false;
}