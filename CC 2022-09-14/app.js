// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.



// Parameters: an array of numbers and an integer

// Return: an array of numbers

// Examples:
divisibleBy([1,2,3,4,5,6], 2) // [2,4,6]
divisibleBy([1,2,3,4,5,6], 3) // [3,6]
divisibleBy([0,1,2,3,4,5,6], 4) // [0,4]




function divisibleBy(numbers, divisor){
  // filter parameter numbers for only numbers divisible by parameter divisor, then return
  return numbers.filter( num => num % divisor === 0 );
}