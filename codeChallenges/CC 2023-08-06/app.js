// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.



// Parameters: an array of unique integers

// Return: an integer representing the number of integers needed to make the argument integer a list of consecutive integers

// Examples:
consecutive([4,8,6]) // 2
consecutive([1,2,3,4]) // 0
consecutive([]) // 0
consecutive([1]) // 0



const consecutive = (arr) => {
    // find the length of argument arr and assign to a variable
    const l = arr.length;

    // if l exists return the max value of arr minus the min value of arr minus l plus 1, else return 0
    return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
}