// Determine the area of the largest square that can fit inside a circle with radius r.



// Parameters: an integer

// Return: an integer

// Examples:
areaLargestSquare(5) // 50
areaLargestSquare(7) // 98
areaLargestSquare(15) // 450



const areaLargestSquare = (r) => {
    // square argument r, multiply by 2, then return
    return r * r * 2;
}