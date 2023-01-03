// Reverse a string while maintaining the spaces (if any) in their original place.



// Parameters: a string, never empty, includes spaces

// Return: the string reversed while maintaining spaces in the same index

// Examples:
solve("codewars") // "srawedoc"
solve("your code") // "edoc ruoy"
solve("your code rocks") // "skco redo cruoy"



const solve = (string) => {
    // split argument string to an array, filter only the letters that are not strings
    let arr = string.split('').filter(letter => letter != ' ');
    // replace each space character
    return string.replace(/\S/g, _ => arr.pop())
}