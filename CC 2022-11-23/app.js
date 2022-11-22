// Write a generic function chainer that takes a starting value, and an array of functions to execute on it.

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.



// Parameters: an integer and an array of functions

// Return: the resultant integer after the argument integer has passed through each function in the argument array of functions

// Example:
const add = (x) => {
	return x + 10;	
}

const mult = (x) => {
	return x * 30;
}

chain(2, [add, mult]) // 360



const chain = (integer, funcsArr) => {
    // reduce through argument funcsArr passing the resultant value to each function, then return
    return funcsArr.reduce( ( result, func ) => func(result), integer );
}