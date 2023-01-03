// Your job is to implement a function which returns the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.



// Parameters: two integers D and N, never negative

// Return: an array of the last D digits of an integer N

// Examples:
lastDigit(1,1) // [1]
lastDigit(123767,4) // [3,7,6,7]
lastDigit(0,1) // [0]



const lastDigit = ( num1, num2 ) => {
    // if num2 > 0 convert num1 to a string, slice from negative num2, split to an array, map through and convert each string to an number, then return. Else return []
    return num2 > 0 ? num1.toString().slice(-num2).split('').map( str => Number(str) ) : [];
}