// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.



// Parameters: two integers num and count, may be positive negative or zero

// Return: an array of integers length equal to argument count starting with argument num and the squares of the previous number, if num is not positive return an empty array

// Examples:
squares(2,5) // [2,4,16,256,65536] 
squares(3,3) // [3,9,81]
squares(5,3) // [5,25,625]
squares(10,4) // [10,100,10000,100000000]



const squares = ( num, count ) => {
    // if count is not positive, return an empty array
  if ( count < 1 ) return [];
  
    // create a variable to hold the final array
    let arr = [num];

    // loop from 2 to count and push arr.length - 1 squared to variable arr
    for ( let i = 2 ; i <= count ; i++ ) {
        arr.push( Math.pow( arr[arr.length-1], 2 ) );
    }

    return arr;
}