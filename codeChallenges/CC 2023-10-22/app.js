// The JavaScript standard now includes functional additions to array like map, filter and reduce, but sadly is missing the convenience functions range and sum . Implement a version of range and sum (which you can then copy and use in your future Kata to make them smaller).

// Array.range(start, count) should return an array containing 'count' numbers from 'start' to 'start + count' Example: Array.range(0, 3) returns [0, 1, 2]

// Array.sum() return the sum of all numbers in the array Example: [0, 1, 2].sum() returns 3 Example: Array.range(-1,4).sum() should return 2

// While not forbidden try to write both function without using a for loop



// Parameters: 
// range: two integers
// sum: an array of integers

// Return:
// range: an array of integers from the first argument integer to the second integer in increments of 1
// sum: an integer representing the sum of the array

// Examples:
Array.range(-1,1) // [-1]
Array.range(-3,5) // [-3,-2,-1,0,1]
[-2,-1,-5].sum() // -8
[-3,-2,-1,0,1,2,3].sum() // 0



Array.range = (start, count) => {
  // create an array of length count,
  // map through to reassign each value to equal i + start,
  // then return
  return Array.from(Array(count)).map( (el, i) => i + start );
}

Array.prototype.sum = function() {
  // reduce through this array to find the sum then return
  return this.reduce( (num, sum) => num + sum, 0 );
}