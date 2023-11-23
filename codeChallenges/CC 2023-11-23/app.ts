// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.



// Parameters: a string of letters

// Return: true if no letters are repeated

export function isIsogram(word: string): boolean{
    // set argument word to lowercase,
    // then split to an array by ''
    const arrayWord: string[] = word.toLowerCase().split('');

    // create a new set from arrayWord
    // return true if this set and arrayWord have equal lengths
    return new Set(arrayWord).size === word.length;
}



console.log(isIsogram('Dermatoglyphics'), true);
console.log(isIsogram('moose'), false);
console.log(isIsogram('aba'), false);