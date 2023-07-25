// Given a year, Find The next happy year or The closest year You'll see your best friend!alt!alt

// Notes
// Year Of Course always Positive .
// Have no fear , It is guaranteed that the answer exists .
// It's not necessary that the year passed to the function is Happy one .
// Input Year with in range (1000  ≤  y  ≤  9000)



// Parameters: an integer representing a year

// Return: an integer representing the next integer with all unique digits

// Examples:
nextHappyYear(1001) // 1023
nextHappyYear(1123) // 1203
nextHappyYear(2001) // 2013
nextHappyYear(2334) // 2340
nextHappyYear(3331) // 3401



const nextHappyYear = (year) => {
    // add 1 to year
    year++;
  
    // while argument year does not contain all unique digits, add 1 to year
    while ( new Set(year.toString().split('')).size !== year.toString().length ) {
        year++;
    }

    return year;
}