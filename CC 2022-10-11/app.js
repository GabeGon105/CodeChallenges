// Complete the function circleArea so that it will return the area of a circle with the given radius. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.



// Parameters: an integer

// Return: an integer or false

// Examples:
circleArea(-1485.86) //returns false
circleArea(0) //returns false
circleArea(43.2673) //returns 5881.25
circleArea(68) //returns 14526.72
circleArea("number") //returns false



const circleArea = (radius) => {
    // if argument radius is less than or equal to 0, or is not a number, return false
    if ( radius <= 0 || typeof radius !== 'number' ) return false;
    
    // square argument radius, multiply it by pi, then assign to a new variable
    const area = radius * radius * Math.PI;
    
    // round variable area to 2 decimal places then return
    return Math.round( area * 100 ) / 100
};