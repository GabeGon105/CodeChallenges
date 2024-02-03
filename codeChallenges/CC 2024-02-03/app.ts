// The first three stages of a sequence are shown.

// The blocksize is a by a and a ≥ 1.

// What is the perimeter of the nth shape in the sequence (n ≥ 1) ?



const perimeterSequence = ( a: number ,n: number ): number => {
    // multiply a and n together, multiply by 4
    return a * n * 4;
}