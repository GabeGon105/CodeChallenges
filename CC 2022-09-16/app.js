// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.



// Parameters: an array and a string

// Return: an integer

// Examples:
min([1,2,3,4,5], 'value') // 1
min([1,2,3,4,5], 'index') // 0



function min(arr, toReturn) {
    // find the lowest number in parameter arr and assign it to a new variable
    const minNum = Math.min(...arr);
    
    // if parameter toReturn equals 'value' return minNum, else if toReturn equals 'index' return the index of minNum in parameter arr
    if ( toReturn === 'value' ) {
      return minNum;
    } else if ( toReturn === 'index') {
      return arr.indexOf(minNum);
    }
}