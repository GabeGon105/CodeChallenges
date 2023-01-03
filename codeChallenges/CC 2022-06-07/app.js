// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)



// Parameters: odd-length array of integers

// Return: integer, the single number than is different form the rest

// Examples:
stray([1, 1, 2]) // 2
stray([17, 17, 3, 17, 17, 17, 17]) // 3



function stray(numbers) {
    //if first number does not equal second or third number, return first number
    if ( numbers[0] !== numbers[1] && numbers[0] !== numbers[2] ) {
      return numbers[0];
    } 
    //else, loop through numbers
    else {
      for ( let i = 1 ; i < numbers.length ; i++ ) {
        //if current number does not equal previous number, return current number
        if ( numbers[i] !== numbers[i-1] ) {
          return numbers[i];
        }
      }
    }
}
