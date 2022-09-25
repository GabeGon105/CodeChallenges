// Write a function that finds the sum of all its arguments.



// Parameters: integers

// Return: an integer

// Examples:
sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15



function sum() {
    // create a variable to hold the final sum
    let sum = 0;
    
    // loop from 0 to length of arguments and add each argument to sum
    for ( let i = 0 ; i < arguments.length ; i++ ) {
      sum += arguments[i];
    }
    
    return sum;
}