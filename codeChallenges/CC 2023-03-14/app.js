// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

// Examples
// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].



// Parameters: a string and an array of strings

// Return: the argument array of strings with all the strings that contain the argument string within. Disregard capital letters. If none of the strings contain the argument string, return ["Empty"]

// Examples:
wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]) // ["ab", "abc", "zab"]
wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]) // ["ab", "abc", "zab"]
wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]) // ["aB", "Abc", "zAB"]
wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]) // ["Empty"]



const wordSearch = ( str, arrOfStr ) => {
    // filter through arrOfStr and return only the strings that contain argument str. Disregard capital letters
    filteredArr = arrOfStr.filter( ( string ) => string.toLowerCase().includes(str.toLowerCase()) );

    // if filteredArr is empty return ["Empty"], else return filteredArr
    return filteredArr.length === 0 ? ["Empty"] : filteredArr; 
}