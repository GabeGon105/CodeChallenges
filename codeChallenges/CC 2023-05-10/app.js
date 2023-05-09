// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.


// Parameters: an array of 10 integers

// Return: the argument integers in the format of a phone number

// Examples:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // "(111) 111-1111"
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"



const createPhoneNumber = (nums) => {
    // map through argument nums to convert all integers to strings
    const strArr = nums.map((num) => num.toString());

    // return the first three numbers of argument nums in parentheses, followed by a space, followed by the next 3 numbers, followed by a '-', followed by the last 4 numbers
    return `(${strArr.slice(0,3).join('')}) ${strArr.slice(3,6).join('')}-${strArr.slice(-4).join('')}`;
}