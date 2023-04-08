// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.



// Parameters: a positive integer

// Return: "Balanced" if the sum of the numbers to the left and right of the middle number(s) are equal, else return "Not Balanced"

// Examples:
balancedNum(7) // "Balanced"
balancedNum(959) // "Balanced"
balancedNum(13) // "Balanced"
balancedNum(432) // "Not Balanced"
balancedNum(424) // "Balanced"



const balancedNum = (number) => {
    // convert argument number to a string and assign to a variable
    const str = number.toString();
    // assign the length of each side depending on if the number is an even or odd number of digits
    const length = (str.length - (str.length % 2 ? -1 : -2)) / 2;

    // create a function to find the sum of the left side and the right side digits
    const sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0);

    // if the left sum and right sum are equal return 'Balanced', else return 'Not Balanced'
    return sum(str.slice(0, length)) === sum(str.slice(-length)) 
    ? 'Balanced' 
    : 'Not Balanced';
}