// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89 = 8^1 + 9^2

// The next number in having this property is 135

// Task
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.



// Parameters: two positive integers

// Return: an array of integers between the two argument integers (inclusive) that fulfill the property above

// Examples:
sumDigPow(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
sumDigPow(10, 100) //  [89]
sumDigPow(90, 100) // []



const sumDigPow = (a, b) => {
    // create a variable to hold the output array
    const arr = [];

    // loop from argument a to argument b
    for ( let i = a ; i <= b ; i++ ) {
        // convert i to a string, split to an array, then reduce to find the sum of all digits (each to an increasing power)
        const total = i.toString().split('').reduce( (sum, num, i) =>   sum + Math.pow(num, i+1), 0 );

        // if total equals i, push i to arr
        if ( total === i ) arr.push(i);
    }

    return arr;
}