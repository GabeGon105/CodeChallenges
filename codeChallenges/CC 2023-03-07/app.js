// Write a function that will take a key of X and place it in the middle of Y repeated N times.

// Extra challege (not tested): You can complete this with under 70 characters without using regex. Challenge yourself to do this. It wont be best practices but it will work.

// Rules:

// If X cannot be placed in the middle, return X.

// N will always be > 0.



// Parameters: an integer N, a string X, and a string Y

// Return: take parameter X and place it in the middle of Y repeated N times

// Examples:
middleMe(18, 'z', '#') // '#########z#########'
middleMe(19, 'z', '#') // 'z'
middleMe(10, 'A', '*') // '*****A*****'



const middleMe = ( n, x, y ) => {
    // if n is odd return x, else splice add y repeated n/2 times plus x plus y repeated n/2 times
    return n % 2 === 1 ? x : y.repeat(n/2) + x + y.repeat(n/2);
}