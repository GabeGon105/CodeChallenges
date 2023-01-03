// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.



// Parameters:  an array of numbers, may be empty, positive and negatives, only integers

// Return: an integer, the sum of all even values from the argument array

// Example:
sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 30



const sumEvenNumbers = (arr) => {
    // filter even numbers from argument arr, reduce to a single integer through addition, then return
    return arr.filter( num => num % 2 === 0 ).reduce( ( sum, num ) => sum + num );
}