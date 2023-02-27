// Write a program that calculates the number of grains of wheat on a specific square of chessboard given that the number on each square is double the previous one.

// There are 64 squares on a chessboard.

// #Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...

// Write a program that shows how many grains were on each square.



// Parameters: an integer representing number of squares

// Return: an integer representing the number of grains on each square

// Examples:
square(1) // 1
square(3) // 4
square(4) // 8
square(16) // 32768
square(32) // 2147483648



const square = ( squares ) => {
    // take argument squares minus 1, square it, then return
    return Math.pow( 2 , squares - 1 )

}