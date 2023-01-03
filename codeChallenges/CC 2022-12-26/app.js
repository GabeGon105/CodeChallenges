// Create a function isDivisible(n,...) that checks if the first argument n is divisible by all other arguments (return true if no other arguments)



// Parameters: at least one integer, all positive

// Return: True if the first argument is divisible by all other arguments, else return false

// Examples:
isDivisible(3,3,4) // false
isDivisible(12,3,4) // true
isDivisible(8,3,4,2,5) // false



const isDivisible = (...nums) => {
    // spread the arguments into an array
    const arr = [ ...nums ]

    // filter arr for only values that divide in to arr[0], then return whether or not the filtered array is equal in length to arr
    return arr.filter( num => arr[0] % num === 0 ).length === arr.length;
}