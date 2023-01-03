// The blocksize is a by a and a ≥ 1.

// What is the perimeter of the nth shape in the sequence (n ≥ 1) ?



// Parameters: an integer

// Return: an integer

// Examples:
perimeterSequence(1,3) // 12
perimeterSequence(2,3) // 24
perimeterSequence(3,4) // 48



const perimeterSequence = (a,n) => {
    // multiply argument a and argument n together, multiply by 4, then return
    return a * n * 4;
}