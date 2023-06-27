// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.

// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.



// Parameters: an array of words seperated by a single space each

// Return: the argument string with consecutive duplicate words removed

// Examples:
removeConsecutiveDuplicates("alpha alpha alpha alpha") // "alpha"
removeConsecutiveDuplicates("alpha beta alpha") // "alpha beta alpha"
removeConsecutiveDuplicates("alpha alphabeta alphagamma") // "alpha alphabeta alphagamma"
removeConsecutiveDuplicates("alpha alpha beta alpha alpha") // "alpha beta alpha"
removeConsecutiveDuplicates("alpha beta beta") // "alpha beta"



const removeConsecutiveDuplicates = (sentence) => {
    // create an array to hold output words
    const output = [];

    // split argument sentence by " ", loop through, push non-consecutive words to output
    sentence.split(' ').forEach( (word) => {
        // if the final value of output does not equal word, push word to output
        if ( output[output.length-1] !== word ) output.push(word);
    } )

    // join unqiues by " ", then return
    return output.join(' ');
}