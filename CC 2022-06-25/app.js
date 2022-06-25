// Given a string str, reverse it and omit all non-alphabetic characters.



// Parameters: A string consisting of lowercase latin letters, digits and symbols

// Return: a string

// Examples: 
reverseLetter("krishan") // "nahsirk"
reverseLetter("ultr53o?n") // "nortlu"



function reverseLetter(str) {
    // split str into an array and assign it to a variable
    let arr = str.split('');
    
    // create a variable to hold new array of only letters
    let onlyLetters = [];
    
    // loop through arr
    for ( let i = 0 ; i < arr.length ; i++ ) {
      // if arr[i] equals a letter a-z, unshift to onlyLetters 
      if ( /[a-z]/.test(arr[i]) ) {
        onlyLetters.unshift(arr[i]);
      }
    }
    
    // join onlyLetters in to a str and return
    return onlyLetters.join('');
}