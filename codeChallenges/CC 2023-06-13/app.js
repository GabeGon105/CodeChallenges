// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).



// Parameters: an array of integers and an integer

// Return: an array of two integers representing the indices of two values from the argument array that sum together to equal the argument integer

// Examples:
twoSum([1,2,3],4) // [0,2]
twoSum([1234,5678,9012], 14690) // [1,2]
twoSum([2,2,3], 4) // [0,1]
twoSum([2,3,1], 4) // [1,2]



const twoSum = (arr, int) => {
    // create a variable to hold the output array
    let output;

    // loop through argument arr
    arr.forEach( (num1, i) => {
        // loop through argument arr
        arr.forEach( (num2, j) => {
            // if i does not equal j and num1 plus num 2 equals argument int, set output equal to [i,j]
            if ( i !== j && num1 + num2 === int ) {
                output = [i,j];
            }
        } )
    } )

    return output;
}