// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.

// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"

// Note The array will never be empty and n will always be smaller than the length of the array.



// Parameters: an array of integers and a single integer n

// Return: if the sum of the n largest numbers is higher return "sum", if the product of the n smallest numbers is higher return "product", if the 2 values are equal return "same"

// Examples:
sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4) // "sum"
sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) // "product"
sumOrProduct([10, 20, 3, 30, 5, 4], 3) // "same"



const sumOrProduct = ( array , n ) => {
    // sort argument array largest to smallest, slice from 0 to argument n, reduce to find the total sum, then assign to a variable
    const sum = array.sort( ( a, b ) => b - a ).slice( 0, n ).reduce( ( sum, num ) => sum += num , 0 );

    // sort argument array smallest to largest, slice from 0 to argument n, reduce to find the total product, then assign to a variable
    const product = array.sort( ( a, b ) => a - b ).slice( 0 , n ).reduce( ( product , num ) => product *= num , 1 );

    let result;

    // if sum is greater than product set result equal to "sum", else if product is greater than sum set result equal to "product", else set result equal to "same"
    if ( sum > product ) result = "sum";
    else if ( product > sum ) result = "product"
    else result = "same";

    return result;
}