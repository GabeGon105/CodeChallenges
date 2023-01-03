// Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.



// Parameters: an integer

// Return: an array of thre integers representing the count of times the argument integer is divisble by 3(but not 5), 5 (but not 3), and 3 and 5

// Examples:
solution(20) // [5, 2, 1]
solution(2) // [0, 0, 0]
solution(14) // [4,2,0]



const solution = num => {
    // create an array of three numbers to count
    let arr = [ 0, 0, 0 ]

    // loop from 1 to num
    for ( let i = 1 ; i < num ; i++ ) {
        // if i is divisible by 3 and 5, add 1 to arr[2]
        if ( i % 3 === 0 && i %  5 === 0 ) arr[2]++;

        // if i is divisible by 5, add 1 to arr[1]
        else if ( i %  5 === 0 ) arr[1]++;

        // if i is divisible by 3, add 1 to arr[0]
        else if ( i % 3 === 0) arr[0]++;
    }

    return arr;
}