// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.



// Parameters: a string sentence with each word seperated by a space

// Return: the argument string without any words that contain only 1 "!"

// Examples:
remove("Hi!") // ""
remove("Hi! Hi!") // ""
remove("Hi! Hi! Hi!") // ""
remove("Hi Hi! Hi!") // "Hi"
remove("Hi! !Hi Hi!") // ""
remove("Hi! Hi!! Hi!") // "Hi!!"
remove("Hi! !Hi! Hi!") // "!Hi!"


const remove = ( sentence ) => {
    // split sentence string to an array by " ", filter words that do not include "!" OR where firstIndexOf("!") and lastIndexOf("!") are not equal, join to a string by " ", then return
    return sentence.split(" ").filter( word => !word.includes("!") || word.indexOf("!") !== word.lastIndexOf("!") ).join(" ")
}