// Given a number return the closest number to it that is divisible by 10.



// Parameters: a positive number, always double digits, never empty

// Return: the argument number rounded to the nearest multiple of 10

// Examples:
closestMultiple10(22) // 20
closestMultiple10(25) // 30
closestMultiple10(37) // 40



const closestMultiple10 = (num) => {
    // divide argument num by 10, round to the nearest integer, multiply by 10, then return
    return Math.round( num / 10 ) * 10;
}