// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.



// Parameter: an array of integers

// Return: an integer 

// Example: 
findLongest([1, 10, 100]) // 100
findLongest([9000, 8, 800]) // 9000
findLongest([8, 900, 500]) // 900



function findLongest(array){
    // convert each number in the array to a string
    let arrStr = array.map( num => String(num) );
    
    // sort arrStr from longest to shortest and assign to a new variable
    let sorted = arrStr.sort( ( a, b ) => a.length < b.length );
    
    // return the first value in variable sorted converted to a number
    return Number(sorted[0]);
}