// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.



// Parameters: a string, may be empty, may b more than one letter, may be uppercase or lowercase

// Return: true if argument string is a singular letter and that letter is uppercase or lowercase vowel, else false

// Examples:
''.vowel() // false
'a'.vowel() // true
'E'.vowel() // true
'ou'.vowel() // false
'z'.vowel() // false
'lol'.vowel() // false



String.prototype.vowel = function() {
    // create an array to hold all lowercase vowels
    const vowels = [ 'a', 'e', 'i', 'o', 'u' ]

    // if this.length equals 1 and vowels includes this return true, else return false
    return ( String(this).length === 1 && vowels.includes( String(this).toLowerCase() ) );
};