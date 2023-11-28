// This time no story, no theory. The examples below show you how to write function accum:

// The parameter of accum is a string which includes only letters from a..z and A..Z.



// Parameters: a string of letters

// Return: the pattern displayed above



export function accum(string: string): string {
    // lowercase argument string
    // split to an array by '' and map through
    // uppercase of the str + repeat str by i
    // join by '-' and return
    return string.toLowerCase().split('')
        .map( (str, i) => str.toUpperCase() + str.repeat(i) )
        .join('-');
}



// Examples:
console.log(accum("abcd"), "A-Bb-Ccc-Dddd");
console.log(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
console.log(accum("cwAt"), "C-Ww-Aaa-Tttt");