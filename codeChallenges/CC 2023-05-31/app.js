// Complete the solution so that the function will break up camel casing, using a space between words.



// Parameters: a string of camelCased letters

// Return: the argument string with spaces instead of camelCase

// Examples:
solution('camelCasing') // 'camel Casing'
solution('camelCasingTest') // 'camel Casing Test'



const solution = (string) => {
    // split argument string to an array, map through and replace any capital letters to have a space before the letter, join back to a string, then return
    return string.split('')
        .map( (letter) => letter.toUpperCase() === letter ? ' ' + letter : letter )
        .join('');
}