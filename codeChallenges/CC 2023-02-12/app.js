// A colleague asked if you can help him fix his function. It seems it doesn't always parse Integers correctly.



// Parameters: an array of string numbers

// Return: an array of integer numbers

// Examples:
parseNumbers([]) // []
parseNumbers(['13']) // [13]
parseNumbers(['2.48']) // [2]



const parseNumbers = ( arrStrings ) => {
    // map through argument arrStrings, change each str to an integer using parseInt(), then return the new array
    return arrStrings.map( str => parseInt(str) );
}