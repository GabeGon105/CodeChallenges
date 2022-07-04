// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.



// Parameters: a positive integer

// Return: a positive integer

// Examples: 
digits(2623) // 4
digits(2) // 1
digits(23) // 2



function digits(n) {
    // convert n to a stringand return the length
    return String(n).length;
}