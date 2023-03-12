// Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

// The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

// So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.



// Parameters: a string of any characters of any length

// Return: return a string of length 26 composed of '1' and '0' depending if each corresponding letter of the alphabet is included in the argument string

// Example:
change("a **&  bZ") // "11000000000000000000000001"



const change = ( string ) => {
    // convert argument string to lowercase and assign to a variable
    const stringLowerCase = string.toLowerCase()

    // split the lowercase alphabet to an array, map through and if stringLowerCase includes each letter return '1' else return '0', then join back to a string and return
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map( (letter) => { 
        return stringLowerCase.includes(letter) ? '1' : '0';
    }).join('');
}