// Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// For example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

// If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H...", because 1 <= 3

// Requested maximum length will be greater than 0. Input string will not be empty.



// Parameters: a string and an integer

// Return: if that length of the argument string is larger than the argument integer return the first number of characters equal to the argument integer followed by "...", else return the argument string

// Examples:
trim("Creating kata is fun", 14) // "Creating ka..."
trim("He", 1) // "H..."
trim("Code Wars is pretty rad", 50) // "Code Wars is pretty rad"



const trim = (str, int) => {
    // if argument str.length is less than or equal to int return str
    if ( str.length <= int ) return str;

    // if int is less than or equal to 3 return str sliced up to int plus "..."
    if ( int <= 3 ) return str.slice(0,int) + "...";

    // if str.length is greater than 3 return str sliced up to int - 3 plus "..."
    return str.slice(0,int-3) + "...";
}