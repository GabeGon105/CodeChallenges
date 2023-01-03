// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.



// Parameters: a string sentence, always a string, never empty

// Return: return the corresponding integer depending on which vowel is missing, a:0 e:1 i:2 o:3 u:4

// Examples:
absentVowel("John Doe hs seven red pples under his bsket") // 0
absentVowel("Bb Smith sent us six neatly arranged range bicycles") // 3



const absentVowel = (string) => {
    // check the index of each vowel in argument string, if it's equal to -1 return the corresponding value
    if ( string.indexOf('a') === -1 ) return 0
    if ( string.indexOf('e') === -1 ) return 1
    if ( string.indexOf('i') === -1 ) return 2
    if ( string.indexOf('o') === -1 ) return 3
    if ( string.indexOf('u') === -1 ) return 4
}