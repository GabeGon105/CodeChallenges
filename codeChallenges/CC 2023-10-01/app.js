// Given a grid of size m x n, calculate the total number of rectangles contained in this rectangle. All integer sizes and positions are counted.



// Parameters: an integer m and an integer n representing a grid

// Return: an integer representing how many rectangles are in the grid of size m by n

// Examples:
numberOfRectangles(4, 4) // 100
numberOfRectangles(5, 5) // 225



const numberOfRectangles = (m,n) => {
    // find the square of m plus m, multiply this by the square of n plus n, divide this product by 4, then return
    return ( (m**2 + m) * (n**2 + n) ) / 4;
}