// Build a function that can get all the integers between two given numbers.

// If startNum is the same as endNum, return an empty array.



// Parameters: two integers, may be the same

// Return: an array containg all integers between both argument integers

// Examples:
range(2,9) // [3,4,5,6,7,8]
range(6,8) // [7]
range(2,9) // [3,4,5,6,7,8]



const range = ( num1, num2 ) => {
    // create an array to hold the output value
    const arr = [];

    // loop from num1 + 1 to num2, push i to arr
    for ( let i = num1 + 1 ; i < num2 ; i++ ) {
        arr.push(i);
    }

    return arr;
}