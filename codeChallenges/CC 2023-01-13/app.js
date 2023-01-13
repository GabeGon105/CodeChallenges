// Your task is to write a function maskify, which changes all but the last four characters into '#'.



// Parameters: a string of any length

// Return: the argument string replacing all but the last 4 characters with "#"

// Examples:
maskify('4556364607935616') // '############5616'
maskify('1') // '1'
maskify('11111') // '#1111'



const maskify = string => {
    // if string.length is greater than 4 return a number of "#" equal to string.length - 4 plus the last 4 characters, else return argument string
    return string.length > 4 ? "#".repeat( string.length - 4 ) + string.slice(-4) : string;
}