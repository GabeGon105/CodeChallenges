// Make a function multiplyAll which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// You must not mutate the original array.



// Parameters: an array of integers

// Return: an array of integers

// Examples:
multiplyAll([1, 2, 3])(2) // [2, 4, 6]
multiplyAll([2, 5, 10])(3) // [6, 15, 30]
multiplyAll([5, 2, 3])(5) // [25, 10, 15]



const multiplyAll = function (arr) {
    // return a function that takes a single integer as an argument
    return function multiplyByGivenNum (multiplier) {
      // loop through argument arr, multiply each integer by argument multiplier, and return
      return arr.map( num => num * multiplier );
    }
}