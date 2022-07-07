// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years

// Additional Notes:
// Only valid years (positive integers) will be tested, so you don't have to validate them



// Parameters: a positive integer

// Return: true or false

// Examples: 
isLeapYear(1234) // False 
isLeapYear(1984) // True
isLeapYear(2000) // True



function isLeapYear(year) {
    // if year is divisible by 400, return true
    if ( year % 400 === 0 ) {
        return true;
    }
    // else if year is not divisible by 400 but is divisible by 100, return false
    else if ( year % 100 === 0 ) {
        return false;
    }
    // else if year is not divisible by 400 and 100 but is divisible by 4, return true
    else if ( year % 4 === 0 ) {
        return true;
    }
    // else return false
    else {
        return false;
    }
}