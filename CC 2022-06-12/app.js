// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.



// Parameters: two strings

// Return: true or false

// Examples:
isAnagram( "foefet", "toffee" ) // true
isAnagram( "Buckethead", "DeathCubeK" ) // true



function isAnagram(test, original) {
    // create variables to hold lowercase parameters
    let str1 = test.toLowerCase();
    let str2 = original.toLowerCase();
    
    // create variables to hold sorted str1 and str2
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    
    // if sortedStr1 equals sortedStr2 return true, else return false
    return sortedStr1 === sortedStr2;
}