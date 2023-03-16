// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.



// Parameters: a positive integer n: 0 < n < 1e6

// Return: remove the last digit until you're left with a number that is a multiple of three and return this number, if none then return null

// Examples:
prevMultOfThree(1) // null
prevMultOfThree(25) // null
prevMultOfThree(36) // 36
prevMultOfThree(1244) // 12
prevMultOfThree(952406) // 9



const prevMultOfThree = (num) => {
    // create a variable to hold the last number tested
    let lastNum = num;

    // while lastNum % 3 !== 0, convert lastNum to a string, slice away the last digit, convert to a number, then assign to lastNum
    while ( lastNum % 3 !== 0 ) {
        lastNum = +( lastNum + '' ).slice(0, -1);
    }

    // if lastNum is 0 return null, else return lastNum
    return lastNum === 0 ? null : lastNum;
}