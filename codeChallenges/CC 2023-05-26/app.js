// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').



// Parameters: a string of characters

// Return: an array of string pairs in order of the argument string, if the argument string is an odd length, include a '_' at the end to complete the final pair

// Examples:
solution("abcdef") // ["ab", "cd", "ef"]
solution("abcdefg") // ["ab", "cd", "ef", "g_"]
solution("") // []



const solution = (str) => {
    // create an array to hold the string pairs
    const arr = []

    // loop from 0 to str.length increasing by an increment of 2 each time
    for ( let i = 0 ; i < str.length ; i = i + 2 ) {
        // push str[i] + str[i+1] to arr, or str[i] + '_' if str is an odd length
        arr.push( str[i] + ( str[i+1] || '_' ) );
    }

    return arr;
}