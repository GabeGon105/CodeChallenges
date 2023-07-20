// Given a varying number of integer arguments, return the digits that are not present in any of them.



// Parameters: a list of integers

// Return: a string of numbers consisting of the numbers that are not present in any of the argument integers

// Examples:
unusedDigits(12, 34, 56, 78) // "09"
unusedDigits(2015, 8, 26) // "3479"



const unusedDigits = (...ints) => {
    // create an array of all string digits
    const digits = ['0','1','2','3','4','5','6','7','8','9']

    // spread all argument ints into an array, then join to a string
    const string = ints.join('');

    // filter through digits and keep only digits that are not included in string, then join the array to a string and return
    return digits.filter( (num) => !string.includes(num) ).join('');
}