// Circle area inside square
// Turn an area of a square in to an area of a circle that fits perfectly inside the square.

// Your function gets a number which represents the area of the square and should return the area of the circle. The tests are rounded by 8 decimals to make sure multiple types of solutions work.

// You don't have to worry about error handling or negative number input: area >= 0.

// This kata might be simpler than you expect, but good luck!



// Parameters: an integer representing the area of a square

// Return: an integer representing the area of a circle perfectly fitted inside the argument square area

// Examples:
squareAreaToCircle(9) // 7.0685834705770345
squareAreaToCircle(20) // 15.70796326794897



const squareAreaToCircle = (areaSq) => {
    // square root argument areaSq, divide by 2, square it, multiply it by pi, then return
    return Math.pow( ( Math.sqrt(areaSq) / 2 ) , 2 ) * Math.PI;
}