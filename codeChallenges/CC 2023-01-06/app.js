// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

// "dolphin" -> "The Dolphin"

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

// "alaska" -> "Alaskalaska"

// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.



// Parameters: a string, one word

// Return: if the word begins and ends with the same letter return the word twice connected together with the first and last letter, else return "The" + the argument word

// Examples:
bandNameGenerator('knife') // 'The Knife'
bandNameGenerator('tart') // 'Tartart'
bandNameGenerator('sandles') // 'Sandlesandles'



const bandNameGenerator = str => {
    // if argument str begins and ends with the same letter, return the word twice connected together
    if ( str[0] === str[str.length-1] ) {
        return str[0].toUpperCase() + str.slice(1) + str.slice(1);
    } 

    // else return "The" + str capitalized
    return 'The ' + str[0].toUpperCase() + str.slice(1);
}