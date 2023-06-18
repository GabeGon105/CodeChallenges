// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.



// Parameters: a string representing a roman numeral

// Return: an integer representing the roman numeral

// Examples:
solution('XXI') // 21
solution('I') // 1
solution('IV') // 4
solution('MMVIII') // 2008
solution('MDCLXVI') // 1666



const solution = (roman) => {
    // create a dictionary for roman numeral integer values
    const dictionary = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

    // use string.match to create an array from all roman numeral pairs and single letter values
    const romanArr = roman.match(/CM|CD|XC|XL|IX|IV|\w/g);
    
    // use reduce to convert each roman string to an integer and sum them all together, then return
    return romanArr.reduce((sum, roman) => sum + dictionary[roman], 0);
}