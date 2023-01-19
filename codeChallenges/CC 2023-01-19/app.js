// Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order



// Parameters: a string of numbers

// Return: sort the argument string of numbers in ascending order and return

// Examples:
sortArray('12345') // '12345'
sortArray('54321') // '12345'
sortArray('34251') // '12345'



const sortArray = strNums => {
    // split strNums to an array, sort, join to a string, then return
    return strNums.split('').sort().join('');
}