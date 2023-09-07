// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// Note :
// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false



// Parameters: a string

// Return: true if the first instance of "x" in the argument string is immediately followed by the string "xx", else return false

// Examples:
tripleX("abraxxxas") // true
tripleX("xoxotrololololololoxxx") // false
tripleX("soft kitty, warm kitty, xxxxx") // true
tripleX("softx kitty, warm kitty, xxxxx") // false



const tripleX = (string) => {
    // find the index of the first occurence of 'x' in argument string and assign to a variable
    const i = string.indexOf('x');

    // slice string from i+1 to i+3, if this value equals 'xxx' return true else return false
    return string.slice(i+1,i+3) === 'xx';
}