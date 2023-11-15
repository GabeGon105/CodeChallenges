// Given an integral number, determine if it's a square number



// Parameters: an integer

// Return: true if the argument integer is a square number, else false



export const isSquare = (num:number): boolean => {
    // find argument num to the power of 0.5
    // return true if the result is a whole number
    return Math.pow( num, 0.5 ) % 1 === 0;
}


console.log(isSquare(-1), false );
console.log(isSquare( 0), true );
console.log(isSquare( 3), false );
console.log(isSquare( 4), true );