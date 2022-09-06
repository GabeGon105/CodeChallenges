// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.



// Parameters: 

// Return: 

// Examples: 



function stringy(size) {
    // create a variable to hold final string
    let str = '';
    
    // loop from 1 to size
    for ( let i = 1 ; i <= size ; i++ ) {
      // if i is odd, add '1' to str, else add '0' to str
      str += i % 2;
    }
    
    // return str
    return str;
}