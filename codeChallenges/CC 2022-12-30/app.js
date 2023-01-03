// Your challenge is to write a function named getSlope that calculates the slope of the line through two points.

// Each point that the function takes in is an array 2 elements long. The first number is the x coordinate and the second number is the y coordinate. If the line through the two points is vertical or if the same point is given twice, the function should return null/None.



// Parameters: two arrays of 2 integers each representing points on a graph, may be the same values

// Return: the slop of the line between both points, if line is vertical or both the same point return null

// Examples:
getSlope([1,1],[2,2]) // 1
getSlope([11,1],[1,11]) // -1
getSlope([1,1],[1,2]) // null



const getSlope = ( pt1, pt2 ) => {
    // if pt1[0] equals pt2[1] return null, else divide ( pt2[0] - pt1[0] ) from ( pt2[1] - pt1[1] ) then return
    return pt1[0] === pt2[0] ? null : ( pt2[1] - pt1[1] ) / ( pt2[0] - pt1[0] );
}