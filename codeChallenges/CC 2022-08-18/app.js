// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).



// Parameters: an array of integers

// Return: an integer

// Examples: 
maxTriSum ([3,2,6,8,2,3]) // 17
maxTriSum ([2,1,8,0,6,4,8,6,2,4]) // 18
maxTriSum ([-7,12,-7,29,-5,0,-7,0,0,29]) // 41



function maxTriSum(numbers){
    // sort argument numbers highest to lowest and assign to a new variable
    let sorted = numbers.sort( ( a, b ) => b - a );
    
    // create a Set object to hold only unique values from variable sorted, and assign to a new variable
    let sortedUnique = [ ...new Set(sorted) ]
    
    // slice the first three items of sortedUnique, reduce to the sum of all numbers, and return
    return sortedUnique.slice( 0, 3 ).reduce( ( sum, num ) => sum += num );
}