// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.



// Parameters: an integer

// Return: an array of strings consisting of " " and "*" that can be stacked to create a pyramid with a number of floors equal to the argument integer

// Examples:
towerBuilder(3)
// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
towerBuilder(6)
// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]



const towerBuilder = (floors) => {
    // create an array to hold the output
    const output = [];

    // loop from 1 to floors
    for ( let i = 1 ; i <= floors ; i++ ) {
        // create a string with spaces equal to floors - i at the start and end, add "*" equal to i*2-1 between the spaces, then push to output
        const string = " ".repeat(floors-i) + "*".repeat(i*2-1) + " ".repeat(floors-i)
        output.push(string);
    }

    return output;
}