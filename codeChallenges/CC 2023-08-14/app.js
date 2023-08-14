// i is the imaginary unit, it is defined by i²=−1, therefore it is a solution to x²+1=0.

// Your Task
// Complete the function pofi that returns i to the power of a given non-negative integer in its simplest form, as a string (answer may contain i).




// Parameters: an integer

// Return: a string representing the result of i to the power of the argument integer

// Examples:
pofi(0) // '1'
pofi(1) // 'i'
pofi(2) // '-1'
pofi(3) // '-i'
pofi(4) // '1'
pofi(5) // 'i'
pofi(6) // '-1'
pofi(7) // '-i'



const pofi = (pow) => {
    // create an array holding the four possible values
    const array = ['1', 'i', '-1', '-i'];

    // find the remainder after taking pow % 4 and use this integer to return the corresponding value from array
    return array[ pow % 4 ];
}