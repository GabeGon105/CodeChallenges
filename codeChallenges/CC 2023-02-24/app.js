// Your friend Robbie has successfully created an AI that is capable of communicating in English!

// Robbie's almost done with the project, however the machine's output isn't working as expected. Here's a sample of a sentence that it outputs:

// ["this","is","a","sentence"]
// Every time that it tries to say a sentence, instead of formatting it in normal English orthography, it just outputs a list of words.

// Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep. So, he wants you to write the last part of his code, a sentencify function, which takes the output that the machine gives, and formats it into proper English orthography.

// Your function should:

// Capitalise the first letter of the first word.
// Add a period (.) to the end of the sentence.
// Join the words into a complete string, with spaces.
// Do no other manipulation on the words.



// Parameters: a list of words

// Return: the argument list of words but capitalize the first letter of the first word, add a '.' to the end of the sentence, join the words into a complete string with spaces.

// Examples:
sentencify(["i", "am", "an", "AI"]) // "I am an AI."
sentencify(["yes"]) // "Yes."
sentencify(["FIELDS", "of", "CORN", "are", "to", "be", "sown"]) // "FIELDS of CORN are to be sown."
sentencify(["i'm", "afraid", "I", "can't", "let", "you", "do", "that"]) // "I'm afraid I can't let you do that."



const sentencify = ( arrOfWords ) => {
    // join arrOfWords by " ", add ".", then assign to a variable
    let sentence = arrOfWords.join(' ') + '.';

    // return the first letter of variable sentence capitalized plus the rest of sentence
    return sentence.slice(0,1).toUpperCase() + sentence.slice(1);
}