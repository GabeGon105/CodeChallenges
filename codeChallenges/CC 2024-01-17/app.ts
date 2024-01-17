// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)



// Parameters: a string of letters

// Return: an array of integers representing indexes (from 1) of vowels in the argument string



const vowelIndices = (word:string): number[] => {
    const vowels = 'aeiouy';
    const indices: number[] = [];

    // split string to an array, and loop through
    word.split('').forEach( (letter,i) => {
        // if vowel, push index+1 to indices array
        if (vowels.includes(letter.toLowerCase())) {
            indices.push(i+1);
        }
    } )

    return indices;
}



console.log( vowelIndices('Gabe'), [2,4] );
console.log( vowelIndices('PENGUIN'), [2,5,6] );
console.log( vowelIndices(''), [] );