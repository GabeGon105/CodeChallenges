// Imagine there's a big cube consisting of n^3 small cubes. Calculate, how many small cubes are not visible from outside.

// For example, if we have a cube which has 4 cubes in a row, then the function should return 8, because there are 8 cubes inside our cube (2 cubes in each dimension)



// Parameters: an integer representing the width of a cube made up of 1^3 cubes

// Return: an integer representing how many cubes cannot be seen from the outside of the cube

// Examples:
notVisibleCubes(0) // 0
notVisibleCubes(1) // 0
notVisibleCubes(2) // 0
notVisibleCubes(3) // 1
notVisibleCubes(5) // 27



const notVisibleCubes = (n) => {
    // if n is less than 3 return 0, else subtract 2 from argument n, then return this value to the third power
    return n < 3 ? 0 : Math.pow( n-2 , 3 );
}