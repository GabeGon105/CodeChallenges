// You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.



// Parameters: a function and an array

// Return: a function

// Example:
spread( someFunction, [1, true, "Foo", "bar"] ) // someFunction(1, true, "Foo", "bar")



function spread(func, args) {
    // return argument func with an argument of all values of args
    return func(...args);
}