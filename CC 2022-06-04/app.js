// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).



// Parameters: two strings

// Return: true or false

// Examples:
solution('abc', 'bc') // true
solution('abc', 'd') // false



function solution(str, ending) {
    // slice str to a length equal to ending starting from the end of the string and assign to strEnding
    let strEnding = str.slice( -ending.length );
    
    // if ending equals strEnding or ending is empty return true, else return false
    if ( ending === strEnding || ending === '' ) {
      return true;
    } else {
      return false;
    }
  }
