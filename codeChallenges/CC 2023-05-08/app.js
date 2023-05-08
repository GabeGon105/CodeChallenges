// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.



// Parameters: an integer

// Return: find all the integers up to the argument integer that are divisible by 3 or 5 then return the sum of all these values

// Example:
solution(10) // 23



const solution = (num) => {
    // if num is less than 3, return 0
    if (num < 3) return 0;

    // create an array to hold all the numbers up to argument num that are divisible by 3 or 5
    const arr = [];

    // loop from 3 to num, if i is divisible by 3 push to arr, else if i is divisible by 5 push to arr 
    for ( let i = 3 ; i < num ; i++ ) {
        if ( i % 3 === 0 ) arr.push(i);
        else if ( i % 5 === 0 ) arr.push(i);
    }

    // reduce arr to find the sum then return
    return arr.reduce( (sum,num) => sum + num, 0 );
}