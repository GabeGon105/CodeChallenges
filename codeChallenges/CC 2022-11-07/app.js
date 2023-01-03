// The function must return the truncated version of the given string up to the given limit followed by "..." if the result is shorter than the original. Return the same string if nothing was truncated.



// Parameters: a string and an integer

// Return: a string equal to the length of the argument integer from the begining followed by a '...' , return same string if the argument integer is greater than the length of argument string

// Examples:
solution('Testing String', 3) // 'Tes...'
solution('Testing String', 8) // 'Testing ...'
solution('Test', 8) // 'Test'



const solution = ( str, num ) => {
    // take a slice of argument str starting from 0 with length of argument num, if str.length is greater than num add '...' to the end and return, else just return
    return str.length > num ? `${str.slice(0,num)}...` : str.slice(0,num);
}