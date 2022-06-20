// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.



// Parameters: an integer greater than 2

// Return: an integer

// Examples: 
angle(3) // 180
angle(4) // 360
angle(5) // 540



function angle(n) {
    // subtract n by 2, multiply by 180, then return
    return ( n -2 ) * 180;
}