// Create function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.



// Parameters: a positive integer of any length

// Return: the sum of all digits of the argument integer

// Examples:
getSumOfDigits(123) // 6
getSumOfDigits(223) // 7
getSumOfDigits(0) // 0



const getSumOfDigits = (number) => {
    // convert argument number to a string, split to an array, reduce to find the sum, then return
    return number.toString().split('').reduce( (sum, num) => sum += Number(num), 0 );
}