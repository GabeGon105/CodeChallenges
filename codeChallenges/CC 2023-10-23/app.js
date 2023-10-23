// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0



// Parameters: an array of integers

// Return: an integer representing the amount of times the array integers switch signs

// Examples:
catchSignChange([]) // 0
catchSignChange([1,3,4,5]) // 0
catchSignChange([-1,-3,-4,-5]) // 0
catchSignChange([1,-3,-4,0,5]) // 2
catchSignChange([-47,84,-30,-11,-5,74,77]) // 3



const catchSignChange = (array) => {
    // create a variable to hold sign change count
    count = 0;

    array.forEach( (num, i) => {
        // if num >= 0 and array[i-1] < 0 add 1 to count
        if ( num >= 0 && array[i-1] < 0 ) return count++;
        // if num < 0 and array[i-1] >= 0 add 1 to count
        if ( num < 0 && array[i-1] >= 0 ) return count++;
    }, 0 )

    return count;
}