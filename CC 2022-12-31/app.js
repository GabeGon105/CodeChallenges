// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

// Notes:
// List size is at least 3.
// All numbers will be positive.
// Numbers could occur more than once , (Duplications may exist).
// Threshold K will always be reachable.



// Parameters: an array of integers and an integer, array of at least 3 integers, all positive, could be duplicates

// Return: an integer representing the number of times you need to add up the smallest numbers in the input array to become equal or greater than the input integer 

// Examples: 
minimumSteps([4,6,3], 7) // 1
minimumSteps([10,9,9,8], 17) // 1
minimumSteps([8,9,10,4,2], 23) // 3
minimumSteps([19,98,69,28,75,45,17,98,67], 464) // 8



const minimumSteps = ( arr, limit ) => {
    // create a variable to hold the current sum
    let sum = 0;

    // create a variable to hold the counter
    let count = 0;

    // while sum is less than argument limit, loop through arr sorted from least to greatest
    while ( sum < limit ) {
        // add sorted arr[0] to sum
        sum += arr.sort( ( a, b ) => a - b )[count];

        // add 1 to count
        count++;
    }

    return count-1;
}