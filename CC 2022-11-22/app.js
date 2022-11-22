// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)



// Parameters: a string and an integer, string is never empty, string has no spaces, integer is always positive

// Return: the argument string divided into a string of words of equal size determined by the argument integer

// Examples:
splitInParts("supercalifragilisticexpialidocious", 3) // "sup erc ali fra gil ist ice xpi ali doc iou s")
splitInParts("HelloKata", 1) // "H e l l o K a t a")
splitInParts("HelloKata", 9) // "HelloKata"



const splitInParts = (string, length) => {
    // create a variable to hold the output
    let arrFinal = [];

    // loop from 0 to string.length in increments of argument length, push string.split('').splice(i,length).join('') to variable arrFinal
    for ( let i = 0 ; i < string.length ; i += length) {
        arrFinal.push( string.split('').splice(i,length).join('') );
    }

    // join arrFinal by ' ' and return
    return arrFinal.join(' ');
}