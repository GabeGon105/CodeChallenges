// In the following 6 digit number:
// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:
// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.



// Parameters: a string of only digits

// Return: a 5 digit integer

// Examples:
solution(1234567890) // 67890
solution(124151590857) // 90857
solution(96843572462632) // 96843



function solution(digits) {
    // create a variable to hold the greatest number
    let greatest = 0;
    
    // loop through digits from 0 to the length of parameter digits minus 4
    for ( let i = 0 ; i < digits.length - 4 ; i++ ) {
      // slice 5 digits, starting from digits[i], then convert to a number, and if it's greater than variable greatest reassign variable greatest
      if ( Number( digits.slice( i, i + 5 ) ) > greatest )
        greatest = Number( digits.slice( i, i + 5 ) );
    }
    
    return greatest;
}