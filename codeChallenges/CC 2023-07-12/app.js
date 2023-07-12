// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
// Numbers will be positive. The hexadecimal string should be lowercased.



// Parameters: a positive integer

// Return: if the argument integer is even convert it to binary, if it's odd, convert it to hex

// Examples:
evensAndOdds(2) // '10'
evensAndOdds(13) // 'd'
evensAndOdds(47) // '2f'
evensAndOdds(0) // '0'
evensAndOdds(12800) // '11001000000000'
evensAndOdds(8172381723) // '1e71ca61b'



const evensAndOdds = (num) => {
    // if the argument integer is even convert it to binary, if it's odd convert it to hex, then return
    return num % 2 === 0 ? num.toString(2) : num.toString(16);
}