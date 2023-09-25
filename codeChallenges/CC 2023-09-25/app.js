// Implement a function which filters out array values which satisfy the given predicate.



// Parameters: an array and a function - result test

// Return: the argument array which has filtered out values that satisfy the function - result test

// Example:
reject([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0 ) // [1, 3, 5]


const reject = (array, predicate) => {
  // filter argument array to return only values that do not pass the test given by argument predicate, then return
  return array.filter(el => !predicate(el));
}