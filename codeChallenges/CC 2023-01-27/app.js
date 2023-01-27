// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase.



// Parameters: a string of letters

// Return: the argument string with the first half (rounded up) lowercase and the second half uppercase

// Examples:
sillycase('foobar') // "fooBAR"
sillycase('codewars') // "codeWARS"
sillycase('brian') // 'briAN'



const sillycase = (string) => {
    // if string.length === 1, return string
    if (string.length === 1) return string;
  
    // slice the first half of argument string, add this to the second half of argument string capitalized, then return
    return string.slice( 0, Math.ceil(string.length/2) ).toLowerCase()
    + string.slice( - Math.floor(string.length/2) ).toUpperCase();
}