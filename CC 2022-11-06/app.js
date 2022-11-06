// Modify the spacify function so that it returns the given string with spaces inserted between each character.



// Parameters: a string, numbers or letters, no empty strings, include spaces

// Return: a string, the original but with a space inbetween each character

// Examples:
spacify( 'Hola, Priscila' ) // 'H o l a  P r i s c i l a'
spacify( 'Hola, Gabi :)' ) // 'H o l a  G a b i : )
spacify( 'Pizza night!' ) // 'P i z z a  n i g h t !'



const spacify = ( str ) => {
    // split argument str to an array, join back to a string separated by white space, and return
    return str.split('').join(' ');
}