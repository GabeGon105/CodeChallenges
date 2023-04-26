// You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

// The function should contain at least 1 argument per set.



// Parameters: two sets of arguments of any length, all integers

// Return: an integer representing the sum of all argument integers

// Examples:
calculate(1)(1) // 2
calculate(1,1)(1) // 3
calculate(1,1)(1,-1) // 2
calculate(2,4)(3,7,1) // 17



const calculate = (...args1) => (...args2) => {
    // spread args1 and args2 into an array, reduce to find the sum, then and return
    return [...args1, ...args2].reduce( (sum, num) => sum += num, 0 );
}