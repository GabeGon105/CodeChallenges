// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.



// Parameters: a string of dots and a mathematical operator

// Return: a number of dots representing the result from the math operation

// Examples:
dotCalculator("..... + ...............") // "...................."
dotCalculator("..... - ...") // ".."
dotCalculator("..... - .") // "...."
dotCalculator("..... * ...") // "..............."
dotCalculator("..... * ..") // ".........."
dotCalculator("..... // ..") // ".."
dotCalculator("..... // .") // "....."
dotCalculator(". // ..") // ""



const dotCalculator = (string) => {
    // create an object to hold functions for each string operator
    const operator = {
        '+': (a, b) => '.'.repeat(a + b),
        '-': (a, b) => '.'.repeat(a - b),
        '*' : (a, b) => '.'.repeat(a * b),
        '//' : (a, b) => '.'.repeat(a / b)
    }
    // split the argument string by ' ', then assign to a variable
    const arr = string.split(' ');

    // using the operator object and arr[1], input the lengths or arr[0] and arr[2], then return
    return operator[arr[1]]( arr[0].length , arr[2].length );
}