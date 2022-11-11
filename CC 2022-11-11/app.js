// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.



// Parameters: a string, contains letters and non-alpha characters

// Return: a string of 1's and 0's where vowels are 1's and non-vowels are 0's

// Examples:
vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100"
vowelOne( "123, arou" ) // "000001011"



const vowelOne = (string) => {
    // split argument string to an array, map through, return '1' if character is a value else return '0', join to a string, then return
    return string.split('').map( char => {
        return char.match(/[aeiouAEIOU]/) ? '1' : '0';
    } )
    .join('');
}