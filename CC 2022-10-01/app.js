// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated.

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces



// Parameters: a string

// Return: A string of two words seperated by a space

// Examples:
sortMyString("CodeWars") // "CdWr oeas"
sortMyString("YCOLUE'VREER") // "YOU'RE CLEVER"



function sortMyString(S) {
    // split argument S to an array, and filter all even indexed variables to a new variable
    let evens = S.split('').filter( ( char, index ) => {
      return index % 2 === 0;
      }
    );
    
    // split argument S to an array, and filter all odd indexed variables to a new variable
    let odds = S.split('').filter( ( char, index ) => {
      return index % 2 !== 0;
      }
    );
    
    // join evens and odds to strings, then combine the two seperated by a space
    return `${evens.join('')} ${odds.join('')}`
}