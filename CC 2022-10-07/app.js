// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.



// Parameters: a string

// Return: a string

// Examples: 
vaporcode("Lets go to the movies") // "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
vaporcode("Why isnt my code working") // "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G"



function vaporcode(string) {
    // convert all letters in argument string to uppercase, then assign to a variable
    const upperCaseStr = string.toUpperCase();
    
    // split upperCaseStr to an array by spaces, join to a string, split to an array, join by two spaces, then return
    return upperCaseStr.split(' ').join('').split('').join('  ');
}