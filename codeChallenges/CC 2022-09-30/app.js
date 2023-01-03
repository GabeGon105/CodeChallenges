// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.



// Parameters: a string

// Return: an array of two strings

// Examples: 
capitalize("abcdef") // ['AbCdEf', 'aBcDeF']
capitalize("codewars") // ['CoDeWaRs', 'cOdEwArS']
capitalize("abracadabra") // ['AbRaCaDaBrA', 'aBrAcAdAbRa']



function capitalize(s){
    // create an array to hold the first output string of capital evens
    let arrEven = [];
    
    // create an array to hold the second output string of capital odds
    let arrOdd = [];
    
    // split argument s to an array and loop through
    s.split('').forEach( ( char, index ) => {
      // if index is even, push capital char to arrEven and push char to arrOdd
      if ( index % 2 === 0 ) {
        arrEven.push( char.toUpperCase() );
        arrOdd.push( char );
      }
      // else, push push char to arrEven and push capital char to arrOdd
      else {
        arrEven.push( char );
        arrOdd.push( char.toUpperCase() );
      }
    } );
    
    // return an array of arrEven and arrOdd converted to strings
    return [ arrEven.join(''), arrOdd.join('') ];
};