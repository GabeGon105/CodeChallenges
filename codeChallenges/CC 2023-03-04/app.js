// Write a function that returns true if a given point (x,y) is inside of a unit circle (that is, a "normal" circle with a radius of one) centered at the origin (0,0) and returns false if the point is outside.

// Input
// x: The first coordinate of the given point.
// y: The second coordinate of the given point.
// Notes
// The region bounded by the circle is considered to be an open disk, so points on the boundary of the circle should return false.
// We are using the euclidean metric.



// Parameters: two integers, representing x and y coordinates

// Return: a boolean value whether the argument cooordinates are inside a unit circle or not

// Examples:
pointInCircle(0,0), true
pointInCircle(2,0), false
pointInCircle(0,0.9), true
pointInCircle(0.5,0.5), true
pointInCircle(1,0), false



const pointInCircle = ( x, y ) => {
    // if x squared plus y squared is less than 1 return true, else return false
    return (x*x) + (y*y) < 1
}