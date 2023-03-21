// Write a function that returns true if the number is a "Very Even" number.

// If a number is a single digit, then it is simply "Very Even" if it itself is even.

// If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".



// Parameters: an integer, always 0 or positive

// Return: true if the argument integer is a single digit even number, or if the argument integer's digits can be added up to equal a single digit even number, else return false

// Examples:
isVeryEvenNumber(88) // false
isVeryEvenNumber(222) // true
isVeryEvenNumber(5) // false
isVeryEvenNumber(841) // true



const isVeryEvenNumber = (num) => {
    // convert argument num to a string, split to an array by '', convert to numbers, then assign to a variable
    let digitsArr = num.toString().split('').map((strDigit) => Number(strDigit));

    // while the sum of the digits of digitsArr is greater than 9, continue to reduce to the sum, convert to string, split to array of digits, convert to numbers, then reassign to digitsArr
    while ( digitsArr.reduce( ( sum, digit ) => sum += digit , 0 ) > 9 ) {
        digitsArr = digitsArr.reduce( ( sum, digit ) => sum += digit , 0 )
            .toString()
            .split('')
            .map((strDigit) => Number(strDigit));
    }

    // reduce digitsArr to the sum of all it's digits, then return whether or not the sum is an even number
    return digitsArr.reduce( ( sum, digit ) => sum += digit , 0 ) % 2 === 0;
}