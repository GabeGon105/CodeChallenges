// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.



// Parameters: an integer between 1 nd 3999 (inclusive)

// Return: the roman numeral equivalent of the argument integer

// Examples:
solution(19) // 'XIX'
solution(22) // 'XXII'
solution(15) // 'XV'
solution(1000) // 'M'
solution(1001) // 'MI'
solution(1990) // 'MCMXC'



const solution = (int) => {
    // create a variable to hold the output string
    let output = '';

    // fill int with leading '0' until it is 4 digits
    while (int.toString().length < 4) int = '0' + int.toString();

    // create a dictionary for each digit place
    const thousands = {'0': '', '1': 'M', '2': 'MM', '3': 'MMM'}
    const hundreds = {'0': '', '1': 'C', '2': 'CC', '3': 'CCC', '4':'CD', '5': 'D', '6': 'DC', '7': 'DCC', '8': 'DCCC', '9': 'CM'}
    const tens = {'0': '', '1': 'X', '2': 'XX', '3': 'XXX', '4':'XL', '5': 'L', '6': 'LX', '7': 'LXX', '8': 'LXXX', '9': 'XC'}
    const singles = {'0': '', '1': 'I', '2': 'II', '3': 'III', '4':'IV', '5': 'V', '6': 'VI', '7': 'VII', '8': 'VIII', '9': 'IX'}

    // convert argument int to a str, convert to an array, then loop through
    int.toString().split('').forEach( (num,i) => {
        // if i === 0, add thousands[num] to output
        if ( i === 0 ) output += thousands[num];
        // if i === 1, add hundreds[num] to output
        if ( i === 1 ) output += hundreds[num];
        // if i === 2, add tens[num] to output
        if ( i === 2 ) output += tens[num];
        // if i === 3, add singles[num] to output
        if ( i === 3 ) output += singles[num];
    } )

    return output;
}