// We want to generate a function that computes the series starting from 0 and ending until the given number.


// Parameters: an integer

// Return: a string of a series of numbers

// Examples:
SequenceSum(6) // "0+1+2+3+4+5+6 = 21"
SequenceSum(-15) // "-15<0"
SequenceSum(0) // "0=0"


function SequenceSum(count) {
    // create a variable to hold the sum
    let stringSum = "0";
    let numberSum = 0;
    
    // check if count is a positive integer
    if ( count > 0 ) {
      // loop from 0 to count
      for ( let i = 1 ; i <= count ; i++ ) {
        // add i as a string to stringSum
        stringSum += `+${String(i)}`;
        
        // add i as a number to numberSum
        numberSum += i;
      }
    }
    // check if count is a negative integer
    else if ( count < 0 ) {
      return `${count}<0`;
    }
    // check if count is equal to zero
    else if ( count === 0 ) {
      return "0=0";
    }
    
    return `${stringSum} = ${String(numberSum)}`;
  }
