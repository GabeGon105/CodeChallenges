// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.



// Parameters: a string of words and spaces

// Return: the argument string but with any words greater than 4 letters reversed

// Examples:
spinWords( "Hey fellow warriors" ) // "Hey wollef sroirraw" 
spinWords( "This is a test") // "This is a test" 
spinWords( "This is another test" )// "This is rehtona test"



const spinWords = (sentence) => {
    // split sentence to an array by ' ', map through to reverse any words greater than length 4, join to a string by ' ', then return
    return sentence.split(' ').map( (str) => {
        // if str.length > 4, split to an array by '', reverse, join to a str, then return
        // else just return
        return str.length > 4 ? str.split('').reverse().join('') : str;
    } )
    .join(' ');
}