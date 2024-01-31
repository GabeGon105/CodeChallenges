// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.



const findLongest = (array:number[]):number => {
    // sort array by string lengths greatest to least
    // return first value
    return array.sort((a,b) => `${b}`.length - `${a}`.length)[0];
}