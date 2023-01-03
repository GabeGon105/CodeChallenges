// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.


// Parameters: a string of mixed uppercase and lowercase letters

// Return: a string of only uppercase or only lowercase letters

// Examples: 
solve("coDe") // "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") // "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") // "code". Upper == lowercase. Change all to lowercase.



function solve(s){
    //convert s to an array, then filter the uppercase letters and assign to a new variable
    let upperCase = s.split('').filter( char => char === char.toUpperCase() );
    
    //convert s to an array, then filter the lowercase letters and assign to a new variable
    let lowerCase = s.split('').filter( char => char === char.toLowerCase() );
    
    //if the length of lowerCase is greater than or equal to upperCase, return s as all lowercase letters
    if ( lowerCase.length >= upperCase.length ) {
      return s.toLowerCase();
    }
    //else, return s as all uppercase letters
    else {
      return s.toUpperCase();
    }
}