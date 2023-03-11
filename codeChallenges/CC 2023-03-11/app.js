// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters.



// Parameters: a string of letters and spaces

// Return: true or false depending on if the string has only spaces between words and no leading/trailing spaces

// Examples:
validSpacing('Hello world') // true
validSpacing(' Hello world') // false
validSpacing('Hello  world ') // false
validSpacing('Hello') // true
validSpacing('Helloworld') // true


const validSpacing = (string) => {
    // check if argument string has any leading/trailing spaces and assign to a variable
    const noOutsideSpaces = string.length === string.trim().length;

    // check if argument string has any double spaces
    const noDoubleSpaces = !string.includes('  ');

    return noOutsideSpaces && noDoubleSpaces;
}