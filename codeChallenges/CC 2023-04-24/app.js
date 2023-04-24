// Let's build a calculator that can calculate the average for an arbitrary number of arguments.

// The test expects you to provide a Calculator object with an average method:

// Calculator.average()
// The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.



// Parameters: an unkown number of integers

// Return: an integer representing the average of all argument integers

// Examples:
Calculator.average(3,4,5) // 4
Calculator.average(3,4,5,6,7,8,9,8,7,6,5,4,3) // 5.769230769230769
Calculator.average() // 0



Calculator.average = function() {
    // if there are no arguments return 0, else spread the arguments into an array, reduce the array to find the sum, divide the sum by the number of args, then return the average
    return [...arguments].reduce( ( sum, num ) => sum += num , 0 ) / arguments.length || 0;
}