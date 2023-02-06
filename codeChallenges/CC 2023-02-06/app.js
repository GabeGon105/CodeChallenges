// Create a function that takes an array of letters, and combines them into words in a sentence.

// The array will be formatted as so:

// [
//   ['J','L','L','M'],
//   ['u','i','i','a'],
//   ['s','v','f','n'],
//   ['t','e','e','']
// ]
// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

// Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).



// Parameters: an array of arrays containing string letters

// Return: a string containing all the combined letters to form a sentence

// Examples:
arrAdder([
    ['J','L','L','M'],
    ['u','i','i','a'],
    ['s','v','f','n'],
    ['t','e','e','']
    ])
// "Just Live Life Man"
    
 arrAdder([ 
      [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
      [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
      [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
      [ '', 'o', '', '', 'e', '', '', 'l' ],
      [ '', 'c', '', '', 'r', '', '', '' ],
      [ '', 'h', '', '', 'h', '', '', '' ],
      [ '', 'o', '', '', 'o', '', '', '' ],
      [ '', 'n', '', '', 'u', '', '', '' ],
      [ '', 'd', '', '', 's', '', '', '' ],
      [ '', 'r', '', '', 'e', '', '', '' ],
      [ '', 'i', '', '', '', '', '', '' ],
      [ '', 'a', '', '', '', '', '', '' ] ])
// "The Mitochondria is the powerhouse of the cell"



const arrAdder = ( arrs ) => {
    // create a variable to hold the output string
    let sentence = '';

    // loop from 0 to arrs[0].length
    for ( let i = 0 ; i < arrs[0].length ; i++ ) {
        // loop through argument arrs
        arrs.forEach( arr => {
            // add arr[i] to variable sentence
            arr[i] ? sentence += arr[i] : null;
        } )
        // add a space to sentence
        sentence += ' ';
    }

    return sentence.trim();
}