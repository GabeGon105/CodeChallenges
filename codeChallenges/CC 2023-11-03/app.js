// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.



// Parameters: always a string, never empty, always lowercase

// Return: string, 'egg' removed after each consonant

// Examples:
unscrambleEggs('deggavegge') // dave
unscrambleEggs('geggabegge') // gabe
unscrambleEggs('teggeceggheggneggo') // techno



const unscrambleEggs = (string) => {
    // replace all instances of 'egg' in string with ''
    return string.replaceAll('egg', '');
}