// Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

// The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

// Write a function that takes an array of integers as an argument and returns the median of those integers.

// Notes:

// The sorting step is vital.
// Input arrays are non-empty.
// Examples
// Median of [33,99,100,30,29,50] is 41.5.
// Median of [3,2,1] is 2.



// Parameters: an array of numbers, never empty

// Return: an integer representing the median value or the average of the two median values

// Examples:
median([3,2,1]) // 2
median([33,99,100,30,29,50]) // 41.5



const median = ( numsArr ) => {
    // sort argument numsArr from least to greatest and assign to a new variable
    const sortedArr = numsArr.sort( ( a, b ) => a - b );

    // if sortedArr.length is odd return the middle value, else return the average of the two middle values
    return sortedArr.length % 2 === 1
    ? sortedArr[ Math.floor( sortedArr.length / 2 ) ]
    : ( sortedArr[ sortedArr.length / 2 ] + sortedArr[ ( sortedArr.length / 2 ) - 1 ] ) / 2;
}