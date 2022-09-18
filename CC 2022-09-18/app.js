// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number. 



// Parameters: an array of integers and strings

// Return: an integer:

// Examples:
divCon( [9, 3, '7', '3'] ) // 2
divCon( ['5', '0', 9, 3, 2, 1, '9', 6, 7] ) // 14
divCon( ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] ) // 13



function divCon(x){
    // create a variable to hold the sum
    let sum = 0;
    
    // loop through parameter x
    x.forEach( num => {
      // if num is an integer, add num to variable sum
      if ( typeof num === 'number' ) {
        sum += num;
      } 
      // else convert num to an integer and subtract from sum
      else {
        sum -= Number(num);
      }
    } );
    
    return sum;
}