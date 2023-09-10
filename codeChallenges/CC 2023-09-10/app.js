// Given two numbers x and n, calculate the (positive) nth root of x; this means that being r = result, r^n = x

// Notes:
// 4 <= x < 10 ^ 20
// 4 <= n <= 50



// Parameters: two integers x and n

// Return: an integer representing the nth root of x

// Examples:
root(4, 2) // 2
root(8, 3) // 2
root(256, 4) // 4
root(9, 2) // 3
root(6.25, 2) // 2.5



const root = (x,n) => {
    // use Math.pow() to raise x to a power of 1/n then return
    return Math.pow( x, 1/n );
}