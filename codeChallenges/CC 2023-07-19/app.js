// Write a function, factory, that takes a number as its parameter and returns another function.

// The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.

// In the example below, 5 is the number passed into the first function. So it returns a function that takes an array and multiplies all elements in it by five.



// Parameters: an integer

// Return: a function that takes an array of numbers as its parameter, and returns an array of those numbers multiplied by the argument integer

// Examples:
const myArray = [1, 2, 3];

const threes = factory(3); 
threes(myArray) // [3, 6, 9]
const fives = factory(5)
fives(myArray) // [5, 10, 15]



function factory(x){
    // return a function that takes an array as an argument, maps through the array to multiply each value by argument x, then returns the new array
    return arr => arr.map( (num) => num * x );
}