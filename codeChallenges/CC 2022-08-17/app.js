// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'



// Parameters: a variable amount of arguments consisting of one lowercase letter each

// Return: a single lowercase letter string

// Examples: 
addLetters('a', 'b', 'c') // 'f'
addLetters('a', 'b') // 'c'
addLetters('z') // 'z'
addLetters('z', 'a') // 'a'
addLetters('y', 'c', 'b') // 'd' // notice the letters overflowing
addLetters() // 'z'



function addLetters(...letters) {
    // create an object dictionary for letter values
    const letterVals = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 0 };
    
    // create a variable to hold the sum of the letters
    let sum = 0;
    
    // loop through argument letters and add each letter value to variable sum
    letters.forEach( letter => sum += letterVals[letter] );
    
    // collect all keys from object letterVals
    return Object.keys(letterVals)
    // find the property with the key of sum % 26
    .find(key => letterVals[key] === sum % 26 )
}