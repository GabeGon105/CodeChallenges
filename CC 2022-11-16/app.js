// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".



// Parameters: a string

// Return: an array of all odd indexed characters of the argument string, return 'invalid string' if shorter than 2 characters or longer than 100 characters

// Example: 
evenChars ("1234") // ["2", "4"]
evenChars (";;;--") // [";", "-"]
evenChars ("abcdefghijklm") // ["b", "d", "f", "h", "j", "l"]



const evenChars = (string) => {
    // if string.length is less than 2 or greater than 100, return 'invalid string'
    if ( string.length < 2 || string.length > 100 ) return 'invalid string'

    // split string to an array, filter odd indexes, then return
    return string.split('').filter( ( char, i ) => i % 2 !== 0 );
}