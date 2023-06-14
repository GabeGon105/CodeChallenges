// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// The input string will always be lower case but maybe empty.

// If the character in the string is whitespace then pass over it as if it was an empty seat



// Parameters: a string of lowercase letters, whitespace, or empty

// Return: an array consisting of the argument string repeated with each letter individually capitalized

// Examples:
wave("hello") // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
wave("codewars") // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
wave("two words") // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
wave(" gap ") // [" Gap ", " gAp ", " gaP "]



const wave = (str) => {
    // create a variable to hold the output array, and a variable to hold index offset due to whitespace
    const output = [];

    // split argument str to an array then loop through
    str.split('').forEach( (el,i) => {
        // if el does not equal " ", add str.slice(0,i) + str[i] capital + str.slice(i+1) to output
        if (el !== " ") {
            output.push(`${str.slice(0,i)}${str[i].toUpperCase()}${str.slice(i+1)}`);
        }
    } )

    return output;
}