// Agent 47, you have a new task! Among citizens of the city X are hidden 2 dangerous criminal twins. Your task is to identify them and eliminate!

// Given an array of integers, your task is to find two same numbers and return one of them, for example in array [2, 3, 6, 34, 7, 8, 2] answer is 2.

// If there are no twins in the city - return None or the equivalent in the language that you are using.



// Parameters: an array of integers

// Return: an integer representing an integer from the argument array that appears twice, or return null

// Examples:
elimination([2,5,34,1,22,1]) // 1
elimination([2,2,34,1,22]) // 2
elimination([2,5,34,1,22]) // null



const elimination = ( numsArr ) => {
    // filter through argument numsArr for a number where the index of num does not equal numsArr.lastIndexOf(num), then return the first value of this filtered array or null
    return numsArr.filter( ( num, i ) => i !== numsArr.lastIndexOf(num) )[0] || null;
}