// Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

// Input
// Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.



// Parameters: two integers, greater than or equal to 0, second integer will always be greater than or equal to the first

// Return: an array containing all integers between the first and second argument integer inclusive

// Example:
generateIntegers(2, 5) // [2, 3, 4, 5]



const generateIntegers = ( num1, num2 ) => {
    // create a variable to hold the output arr
    let arr = [];

    // loop from num1 to num2
    for ( let i = num1 ; i <= num2 ; i++ ) {
        arr.push(i);
    }
    
    return arr;
}