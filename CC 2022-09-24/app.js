// Two red beads are placed between every two blue beads. There are N blue beads.

// Implement countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.



// Parameters: an integer

// Return: an integer

// Examples:
countRedBeads(0) // 0
countRedBeads(1) // 0
countRedBeads(3) // 4



function countRedBeads(n) {
    // if argument n is less than 2, return 0
    if ( n < 2 ) {
      return 0;
    }
    
    // subtract 1 from argument n, multiply by 2, then return
    return (n - 1) * 2;
}