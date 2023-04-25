// This is a kata series that you can only solve using recursion.
// ##1 - Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.



// Parameters: a positive integer

// Return: the factorial of the argument integer

// Examples:
factorial(0) // 1
factorial(1) // 1
factorial(2) // 2
factorial(3) // 6


const factorial = (num) => {
    // if num equals 0 return 1
    if ( num === 0 ) return 1;
    // else return num multiplied by factorial(n-1)
    else return num * factorial(num-1);
}