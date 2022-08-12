// For this challange, you will have to forget how to add two numbers.

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.



// Parameters: two integers

// Return: one integer

// Examples:
add( 16, 18 ) // 214
add( 26, 39 ) // 515
add( 122, 81 ) // 1103



function add(num1, num2) { 
  // convert num1 to a string then an array, reverse,  then assign it to a variable
  let num1Arr = num1.toString().split('').reverse();
  
  // convert num2 to a string then an array, reverse, then assign it to a variable
  let num2Arr = num2.toString().split('').reverse();
  
  // create a variable to hold the sums of each digit pair
  let arrSums = [];
  
  // if num1Arr.length is greater than num2Arr.length, loop from 0 to num1Arr.length
  if ( num1Arr.length > num2Arr.length ) {
    for ( let i = 0 ; i < num1Arr.length ; i++ ) {
      // add num1Arr[i] and num2Arr[i] or 0 as numbers, then push the sum to arrSums
      arrSums.push( Number(num1Arr[i]) + ( Number(num2Arr[i] || 0 ) ) );
    }
  }
  // else loop from num2Arr.length -1 down to 0
  else {
    for ( let i = 0 ; i < num2Arr.length ; i++ ) {
      // add num1Arr[i] or 0 and num2Arr[i] as numbers, then push the sum to arrSums
      arrSums.push( ( Number(num1Arr[i] || 0 ) ) + Number(num2Arr[i]) );
    }
  }
  
  // reverse arrSums, join to a string, then return as a number
  return Number( arrSums.reverse().join('') );
}