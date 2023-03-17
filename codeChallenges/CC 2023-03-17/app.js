// Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

// The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:



// Parameters: a string of lowercase letters

// Return: use each letter in the argument string as a key for the preloaded dictionary and return a string of the values seperated by spaces

// Examples:
makeBackronym('dgm') // 'disturbing gregarious mustache'
makeBackronym('lkj') // 'literal klingon joke'
makeBackronym('interesting') // 'ingestable newtonian turn eager rant eager stylish turn ingestable newtonian gregarious'
makeBackronym('codewars') // 'confident oscillating disturbing eager weird awesome rant stylish'



const makeBackronym = (str) => {
    // split str to an array, map through to replace each letter with dict[letter], join by ' ', then return
    return str.split('').map( ( letter ) => dict[letter.toUpperCase()] ).join(' ');
}