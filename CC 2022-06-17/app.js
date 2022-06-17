// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).



// Parameters: two arrays of strings composed of letters a to z

// Return: a positive integer 

// Example: 
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
function mxdiflg( a1 , a2 ) // 13



function mxdiflg(a1, a2) {
    // if a1 or a2 is empty, return -1
    if ( a1.length === 0 || a2.length === 0 ) {
      return -1;
    }
    
    // create a variable to hold the largest difference in length
    let length = 0;
    
    // loop through a1
    a1.forEach( str1 => {
      // loop through a2
      a2.forEach( str2 => {
        // if the absolute value of the difference between str1 length and str2 length is greater than variable length, reasign variable length
        if ( Math.abs( str1.length - str2.length ) > length ) {
          length = Math.abs( str1.length - str2.length);
        }
      })
    } )
    
    return length;
}