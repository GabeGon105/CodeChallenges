// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.




// Parameters: an array of numbers, all numbers occur twice except two numbers that only occur once, includes zero, no negatives

// Return: the sum of the two numbers that only occur once

// Examples:
repeats([4,5,7,5,4,8]) // 15
repeats([9, 10, 19, 13, 19, 13]) // 19
repeats([16, 0, 11, 4, 8, 16, 0, 11]) // 12



const repeats = (arr) => {
    // filter arr to find values that only occur once
    const arrFiltered = arr.filter( num => arr.indexOf(num) === arr.lastIndexOf(num) );
      
    // sum the numbers of arrFiltered and return
    return arrFiltered.reduce( ( sum, num ) => sum + num, 0);
}