// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.



// Parameters: a string of words

// Return: an array of words

// Examples:
last('man i need a taxi up to ubud') // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano') // ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak')// ['take', 'me', 'semynak', 'to']



function last(x){
    // split argument x to an array by spaces, loop through the array, and assign to a new variable
    let arr = x.split(' ').map( word => {
      // reverse word
      return word.split('').reverse().join('');
    } );
    
    // sort variable arr, loop through, and assign to a new variable
    let arrFinal = arr.sort( ( a, b ) => {
      // sort by the first letter in each word
      return a.charCodeAt(0) - b.charCodeAt(0) 
    })
    .map( word => {
      // reverse word
      return word.split('').reverse().join('');
    } );
    
    return arrFinal;
  }