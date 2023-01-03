// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.



// Parameters: a string of numbers, never empty, only numbers

// Return: true if the number is divisible by 3, else return false

// Examples:
divisibleByThree('123') // true
divisibleByThree('19254') // true
divisibleByThree('88') // false
divisibleByThree('1') // false



const divisibleByThree = (string) => {
    // split argument string to an array, reduce each value to a total sum, return true if divisible by 3 else return false
    return string.split('').reduce( ( sum, num ) => Number(sum) + Number(num) ) % 3 === 0;
}