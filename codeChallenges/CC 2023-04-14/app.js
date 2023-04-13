// Create a function called args_count that returns the number of arguments provided



// Parameters: a random number of arguments of any type

// Return: an integer representation of the amount of arguments given

// Examples:
args_count(1, 2) // 2
args_count() // 0
args_count('A', 'B', 'C') // 3
args_count(["foo", "bar"]) // 1



const args_count = (...args) => {
    // the arguments are spread in argument ...args, so find the length then return
    return args.length;
}