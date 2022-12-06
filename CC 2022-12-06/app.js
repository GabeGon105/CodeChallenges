// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).



// Parameters: an array of integers, never empty

// Return: an integer representing the rounded average of all numbers in the argument array

// Examples:
average( [49,3,5,300,7] ) // 73
average( [90,98,89,100,100,86,94] ) // 94



const average = (scores) => {
    // reduce all numbers in argument scores to one number, divide the sum by scores.length, round to the nearest whole number, then return
    return Math.round( scores.reduce( (a,b) => a + b, 0 ) / scores.length );
}