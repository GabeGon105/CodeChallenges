// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.



export function sumDigits(n: number): number {
    // find the absolute value of number
    // convert to string, split to array
    // reduce to find the sum of all digits
    return Math.abs(n).toString().split('')
        .reduce( (sum, num): number => sum += Number(num) , 0 );
}