// You're going to write a function that's going to return the value in the nth index of an arithmetic sequence.(That is, adding a constant to move to the next element in the "set").

// The function's name is nthterm/Nthterm, it takes three inputs first,n,c where:

// first is the first value in the 0 INDEX.
// n is the index of the value we want.
// c is the constant added between the terms.
// Remember that first is in the index 0 .. just saying ...



// Parameters: three integers representing the first value of a sequence first, the index of the final value n, and the constant added between terms c

// Return: an integer representing the final value

// Examples:
nthterm(1, 2, 3) // 7
nthterm(2, 2, 2) // 6
nthterm(-50, 10, 20) // 150



const nthterm = (first, n, c) => {
    // multiply n by c, add to first, then return
    return n * c + first;
}