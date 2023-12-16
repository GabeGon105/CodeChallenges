// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).



// Parameters: an array of integers

// Return: 'even' or 'odd' depending on the sum of the integers



export const oddOrEven = (array: number[]): string => {
  // reduce through array to find the sum
  const sum = array.reduce( (sum, num) => sum += num, 0 );

  // check if sum is even or odd
  return sum % 2 === 0 ? 'even' : 'odd';
}



console.log(oddOrEven([0]), 'even')
console.log(oddOrEven([1]), 'odd')
console.log(oddOrEven([]), 'even')