// Write function heron which calculates the area of a triangle with sides a, b, and c using Heron's formula.

// Output should have 2 digits precision.



// Parameters: three integers representing a, b, and c

// Return: the integer result rounded to two decimal spaces

// Examples:
heron(3, 4, 5) // 6
heron(6, 8, 10) // 24



const heron = ( a, b, c ) => {
    // find the value of s by adding all parameters and dividing by 2
    const s = ( a + b + c ) / 2;

    // input a, b, c, and s into Heron's formula
    const result = Math.sqrt( s * ( s - a )* ( s - b )* ( s - c ) )

    // round result to two decimals then return
    return Math.round(result*100) / 100;
}