// Count the number of exclamation marks and question marks, return the product.



// Parameters: a string of letters and symbols

// Return: an integer representing the number of '!' multipled by the number of '?' in the argument string

// Examples:
product("!!") // 0
product("!??") // 2
product("!???") // 3
product("!!!??") // 6
product("!!!???") // 9



const product = ( string ) => {
    // split argument string to an array by '', filter for only '!', find the length, then assign to a variable. Repeat for '?'
    const numOfEx = string.split('').filter( (str) => str === '!' ).length;
    const numOfQ = string.split('').filter( (str) => str === '?' ).length;

    // multiply numOfEx by numOfQ then return
    return numOfEx * numOfQ;
}