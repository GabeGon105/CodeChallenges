// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not .

// Notes
// Number passed is always Positive .
// Return the result as String .
// The difference between ‘9’ and ‘0’ is not considered as 1 .
// All single digit numbers are considered as Jumping numbers.



// Parameters: a positive integer, any number of digits

// Return: if all digits in the argument integer are within 1 of each adjacent digit return "Jumping!!", else return "Not!!"

// Examples:
jumpingNumber(9) // "Jumping!!"
jumpingNumber(23) // "Jumping!!"
jumpingNumber(32) // "Jumping!!"
jumpingNumber(79) // "Not!!"
jumpingNumber(98) // "Jumping!!"



const jumpingNumber = (int) => {
    // convert argument int to a string then split to an array
    const arr = int.toString().split('');

    // loop through arr, if every number is within 1 of the number before it return "Jumping!!", else return "Not!!"
    return arr.every( (num, i) => i < 1 || Math.abs(Number(num) - Number(arr[i-1])) === 1 )
        ? "Jumping!!"
        : "Not!!"
}