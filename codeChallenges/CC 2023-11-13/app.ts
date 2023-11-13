// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.



// Parameters: an integer

// Return: square each digit integer, concatenate, return an integer



export const square_digits = (num: number): number => {
    // convert num to a string, split to an array
    // square each value
    // rejoin to a string then convert to an integer
    return + num.toString().split('')
        .map( (digit) => Number(digit)**2 )
        .join('');
}


// Tests:
console.log(square_digits(9119), 811181)
console.log(square_digits(0), 0)