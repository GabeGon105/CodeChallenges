// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.



// Parameters: an array of arrays and integers, arrays represent length and width of a rectangle, integers represent the radius of a circle

// Return: the argument array sorted by area in ascending order

// Examples:
sortByArea([ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]) // [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ] 
sortByArea([ [2, 5], 6 ]) // [ [2, 5], 6 ]
sortByArea([]) // []



const sortByArea = (array) => {
    // sort the array by area, if the element is an array find the area of a rectangle, else find the area of a circle
    return [...array].sort( ( a, b ) => {
        const areaA = Array.isArray(a) ? a[0] * a[1] : a * a * Math.PI;
        const areaB = Array.isArray(b) ? b[0] * b[1] : b * b * Math.PI;

        return areaA - areaB;
    } )
}