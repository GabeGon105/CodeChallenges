// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.



// Parameters: a string of lowercase letters with no spaces

// Return: a string with alternating capital letters

// Examples:
capitalize('abcdef') // ['AbCdEf', 'aBcDeF']
capitalize('gabe') // ['GaBe', 'gAbE']
capitalize('hello') // ['HeLlO', 'hElLo']



function capitalize(s) {
    // convert s to an array and assign it to a variable
    let arr = s.split('');
    
    // create a variable to hold even index capitals as an array
    let evenCaps = [];
    
    // create a variable to hold odd index capitals as an array
    let oddCaps = [];
    
    // loop through s
    for ( let i = 0 ; i < s.length ; i++ )
      // if i is even or 0, push upper case arr[i] to evenCaps and lower case arr[i] to oddCaps
      if ( i % 2 === 0 || i === 0 ) {
        evenCaps.push( arr[i].toUpperCase() );
        oddCaps.push( arr[i] );      
      }
      // else push upper case arr[i] to oddCaps and lower case arr[i] to evenCaps
      else {
        oddCaps.push( arr[i].toUpperCase() );
        evenCaps.push( arr[i] );
      }
    
    // return an array of evenCaps and oddCaps as strings
    return [ evenCaps.join('') , oddCaps.join('') ];
};