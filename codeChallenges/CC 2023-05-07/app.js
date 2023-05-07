// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.



// Parameters: two integer representing two interior angles of a triangle

// Return: an integer representing the third interior angle of a triangle given the two argument integers

// Examples:
otherAngle(30, 60) // 90
otherAngle(60, 60) // 60
otherAngle(43, 78) // 59
otherAngle(10, 20) // 150



const otherAngle = (angle1, angle2) => {
    // return 180 minus angle1 minus angle2
    return 180 - angle1 - angle2;
}