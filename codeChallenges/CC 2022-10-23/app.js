//Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.



// Parameters: an array of integers, never empty, may be negative

// Return: sum all the odd numbers after cubing each one, one integer, return undefined if any value is not a number

// Examples:
cubeOdd([1, 2, 3, 4]) // 28
cubeOdd([-3,-2,2,3]) // 0
cubeOdd(["a",12,9,"z",42]) // undefined



const cubeOdd = (arr) => {
    // create a variable to hold the final sum
    let sum = 0;

    // loop through argument arr and if the value is odd then cube it and add it to variable sum
    arr.forEach( num => {
        if ( Math.abs(num) % 2 === 1 ) sum+= ( num*num*num )
    } );

    // if arr includes non-integer values return undefined, else return sum
    return arr.filter( num => num === Number(num) ).length === arr.length ? sum : undefined;
}