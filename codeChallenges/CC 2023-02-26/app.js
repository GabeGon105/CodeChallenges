// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

// If a word starts with a number or special character, skip the word and leave it out of the result.

// Input String will not be empty.

// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"



// Parameters: a string of words both capitalized and non-capitalized

// Return: the argument string but with all capitalized words first, followed by the non-capitalized words. Any words that start with a special character should be removed

// Example:
capitalsFirst("hey You, Sort me Already!") // "You, Sort Already! hey me"



const capitalsFirst = ( string ) => {
    // create a variable to hold uppercase words and a variable to hold lowercase words
    const upper = [];
    const lower = [];

    // split argument string to an array by "", loop through, push words that begin with uppercase letters to upper and push words that begin with lowercase letters to lower
    string.split(' ').forEach( word => {
        if ( /[A-Z]/.test(word[0]) ) upper.push(word);
        else if ( /[a-z]/.test(word[0]) ) lower.push(word);
    } )

    // join upper and lower to strings by ' ', then return together seperated by a string
    return `${upper.join(' ')} ${lower.join(' ')}`.trim();
}