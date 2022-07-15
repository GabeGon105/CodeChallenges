// Given a sequence of numbers, find the largest pair sum in the sequence.
// Input sequence contains minimum two elements and every element is an integer.



// Parameters: an array containing a minimum of two elements, all integers

// Return: a positive integer

// Examples: 
largestPairSum([10, 14, 2, 23, 19]) // 42 (= 23 + 19)
largestPairSum([99, 2, 2, 23, 19]) // 122 (= 99 + 23)



function largestPairSum (numbers) {
    // sort argument numbers largest to smallest and assign to a new variable
    const sorted = numbers.sort( ( a, b ) => b - a );
    
    // return the sum of the first two values of variable sorted
    return sorted[0] + sorted[1];
}