// An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.

// a and b are integers and > 0

// Write a function which returns the area of the arrow.



// Parameters: two integers a and b representing the base and side of a rectangle respectively

// Return: an integer representing the arrow inside the rectangle

// Examples:
arrowArea(4,2) // 2
arrowArea(7,6) // 10.5
arrowArea(25,25) // 156.25



const arrowArea = (a, b) => {
    // multiply a times b times 0.25 then return
    return a*b*0.25;
}