// Write a function that reverses the bits in an integer.

// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

// You can assume that the number is not negative.



// Parameters: a non-negative integer

// Return: convert the argument integer to binary, reverse the binary string, convert back to an integer, then return

// Examples:
reverseBits(417) // 267
reverseBits(267) // 417
reverseBits(0) // 0
reverseBits(2017) // 1087
reverseBits(1023) // 1023
reverseBits(1024) // 1


const reverseBits = (num) => {
    // convert num to a string by (2), split to an array, reverse, join to a string, convert to a number, then return
    return parseInt( num.toString(2).split('').reverse().join(''), 2 );
}