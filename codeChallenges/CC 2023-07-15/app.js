// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.



// Parameters: an array of integers

// Return: true or false depending if for each value in the argument array cthere is also value 1 larger or lower

// Examples:
isNice([2,10,9,3]) // true
isNice([3,4,5,7]) // false



const isNice = (arr) => {
    // if argument arr is empty return false
    // loop through argument arr using every, return whether or not for every value there is a value +-1
    return arr.length > 0 && arr.every( (num) => arr.includes(num-1) || arr.includes(num+1) );
}