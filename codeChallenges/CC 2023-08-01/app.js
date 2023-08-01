// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.



// Parameters: an array of unique integers and two integers a and b

// Return: true if arguments a and b appear consecutively in the argument array, else return false

// Examples:
consecutive([1, 3, 5, 7], 3, 7) // false
consecutive([1, 3, 5, 7], 3, 1) // true
consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4) // true



const consecutive = ( arr, a, b ) => {
    // find the index of argument a in argument arr and assign to a variable
    const i = arr.indexOf(a);

    // if arr[i-1] or arr[i+1] equals b return true, else return false
    return arr[i-1] === b || arr[i+1] === b;
}