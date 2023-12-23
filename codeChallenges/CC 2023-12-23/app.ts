// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]



export const capitals = (word: string): number[] => {
    const indexesArr: number[] = [];

	// split word to an array, loop through
    // push indexes of capital letters to indexesArr
    word.split('').forEach( (letter,i) => {
        if ( /[A-Z]/.test(letter) ) indexesArr.push(i);
    } );

    return indexesArr;
}