// Complete the solution so that it returns the number of times the search_text is found within the full_text.



// Parameters: two strings

// Return: an integer representing the number of times that the second argument string occurs in the first argument string

// Examples:
solution('abcdeb','b') // 2
solution('abc','b') // 1
solution('abbc','bb') // 1



const solution = (string, search) => {
    // split argument string to an array by argument search, take the length minus 1, then return
    return string.split(search).length - 1;
}