// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.



export const capitalize = (s: string) => {
    let evenString: string = '';
    let oddString: string = '';

    // split s to an array, loop through
    s.split('').forEach( (letter, i) => {
        // if i is even add capital letter to evenString
        // and letter to oddString
        if ( i % 2 === 0 ) {
            evenString += letter.toUpperCase();
            oddString += letter;
        }
        // else add letter to evenString
        // and capital letter to oddString
        else {
            oddString += letter.toUpperCase();
            evenString += letter;
        }
    } )

    return [evenString, oddString];
}