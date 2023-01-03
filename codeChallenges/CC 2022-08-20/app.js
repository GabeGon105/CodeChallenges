// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

// Notes
// Number passed is always Positive.
// Return the result as String



// Parameters: an integer

// Return: a string of either "STRONG!!!!" or "Not Strong !!"

// Examples: 
strong_num(1) // "STRONG!!!!"
strong_num(123) // "Not Strong !!"
strong_num(2)  // "STRONG!!!!"
strong_num(150) // "Not Strong !!"



function strong(n) {
    // convert n to a string, split to an array, then assign to a new variable
    let arr = n.toString().split('');
    
    // create a variable to hold the sum of the factorials
    let sum = 0;
    
    // loop through arr
    arr.forEach( str => {
      // create a variable to hold the factorial of str
      let factorial = 1;
      // loop from 2 to str converted to a number
      for ( let i = 2 ; i <= Number(str) ; i++ ) {
        // multiply factorial by i and reassign factorial
        factorial *= i
      }
      
      // add factorial to sum
      sum += factorial;
    } )
    
    // if n equals sum, return "STRONG!!!!", else return "Not Strong !!"
    if ( n === sum ) {
      return "STRONG!!!!";
    } else {
      return "Not Strong !!";
    }
}