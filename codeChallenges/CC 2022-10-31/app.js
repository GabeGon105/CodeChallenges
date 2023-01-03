// Find the last element of the given argument(s).



// Parameters: an array, string, or list of arguments. Will not be empty

// Return: the last element of the given list

// Examples:
last([1, 2, 3, 4] ) //  4
last("xyz") // "z"
last(1, 2, 3, 4) //  4



function last(list){
    // create a variable to hold the final argument value
    const last = arguments[arguments.length - 1];
    
    // return the last value of variable last or variable last
    return last[last.length - 1] || last;
}