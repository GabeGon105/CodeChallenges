// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W  
// e o  
// l r  
// l l  
// o d

// A few things to note:

// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be



// Parameters: an array of two strings, may be different lengths

// Return: a string with two letters on each line so each word reads top to bottom

// Examples:
transposeTwoStrings(['Hello', 'World'], "H W\ne o\nl r\nl l\no d");
transposeTwoStrings(['joey', 'louise'], "j l\no o\ne u\ny i\n  s\n  e");
transposeTwoStrings(['a', 'cat'], "a c\n  a\n  t")



const transposeTwoStrings = ( arr ) => {
    // create a variable to hold the output string
    let outputStr = '';

    // if arr[0].length is larger than arr[1].length set a new variable equal to 0, else set it equal to 1
    const larger = arr[0].length > arr[1].length ? 0 : 1;

    // loop from 0 to arr[larger].length
    for ( let i = 0 ; i < arr[larger].length ; i++ ) {
        // if arr[0][i] exists add arr[0][i] to outputStr, else add ' ' to outputStr
        arr[0][i] ? outputStr += arr[0][i] : outputStr += ' ';
        // if arr[1][i] exists add ' ' plus arr[1][i] plus '\n' to outputStr, else just add '  \n' to outputStr
        arr[1][i] ? outputStr += ` ${arr[1][i]}\n` : outputStr += '  \n';
    }

    return outputStr.slice(0, -1);
}