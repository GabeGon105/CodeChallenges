// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.



// Parameters: a string of words

// Return: a string of letters and numbers, first letter of each word in the argument string, replace i or I with 1, replace o or O with 0, replace s or S with 5, no spaces

// Examples:
makePassword("Give me liberty or give me death") // "Gml0gmd"
makePassword("Keep Calm and Carry On") // "KCaC0"



const makePassword = strPhrase => {
    // split strPhrase to an array by ' ', map through to grab the first letter of each word, join by '' then return
    return strPhrase.split(' ').map( word => {
        // if the first letter of word equals i, return 1
        if ( word[0].toLowerCase() === 'i' ) return 1;

        // if the first letter of word equals i, return 1
        if ( word[0].toLowerCase() === 'o' ) return 0;

        // if the first letter of word equals i, return 1
        if ( word[0].toLowerCase() === 's' ) return 5;

        // else, return the first letter of word
        return word[0];
    } ).join('');
}