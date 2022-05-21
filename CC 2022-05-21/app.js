// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.



// Parameters: a positive integer

// Return: an array containing numbers or strings "Fizz", "Buzz", "FizzBuzz"

// Examples:
fizzbuzz(3) // [1, 2, "Fizz"]
fizzbuzz(5) // [1, 2, "Fizz", 4, "Buzz"]
fizzbuzz(15) // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]



function fizzbuzz(n) {
    // create an array to hold the output
    let array = [];
    
    // loop from 1 to n
    for ( let i = 1 ; i <= n ; i++ ) {
      // if i is divisible by both 3 AND 5, push "FizzBuzz" to array
      if ( i % 3 === 0 && i % 5 === 0 ) {
        array.push("FizzBuzz");
      }
      // if i is divisible by only 3, push "Fizz" to array
      else if ( i % 3 === 0 ) {
        array.push("Fizz");
      }
      // if i is divisible by only 5, push "Buzz" to array
      else if ( i % 5 === 0 ) {
        array.push("Buzz");
      }
      // if i is not divisible by 3 or 5, push i to array
      else {
        array.push(i);
      }
    }
    
    return array;
  }






