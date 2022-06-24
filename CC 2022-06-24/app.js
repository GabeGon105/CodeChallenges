// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?



// Parameters: an integer

// Return: an integer

// Examples:
roundToNext5(0) // 0
roundToNext5(5) // 5
roundToNext5(3) // 5
roundToNext5(-2) // 0



function roundToNext5(n){
    // create variable to hold output
    let output = n;

    // create a loop to add 1 until n is divisible by 5
    while ( output % 5 !== 0 ) {
        output++;
    }
    
    return output;
}