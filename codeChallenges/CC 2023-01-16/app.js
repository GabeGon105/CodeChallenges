// The photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.



// Parameters: a string of '0' and '1'

// Return: the argument string, but replace all '0' with '1' and replace all '1' with '0'

// Examples:
broken("1") // "0"
broken("10000000101101111110011001000") // "01111111010010000001100110111"
broken("100010") // "011101"



const broken = binaryString => {
    // split binaryString to an array, map through and replace all '0' with '1' and replace all '1' with '0', join to a string, then return
    return binaryString.split('').map( num => num === '0' ? '1' : '0' ).join('');
}