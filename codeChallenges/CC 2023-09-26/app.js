// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)



// Paramters: a string of letters

// Return: the argument string with the last letter of each word lowercase and all other letters uppercase

// Examples:
alienLanguage("My name is John") // "My NAMe Is JOHn"
alienLanguage("this is an example") // "THIs Is An EXAMPLe"
alienLanguage("Hello World") // "HELLo WORLd"



const alienLanguage = (string) => {
    // split argument string to an array by ' ', map through to change each word to all capital letters except the last letter lowercase, join to a string by ' ', then return
    return string.split(' ').map( (word) => {
        return word.slice(0,word.length-1).toUpperCase()
            + word[word.length-1].toLowerCase();
    } ).join(' ');
}