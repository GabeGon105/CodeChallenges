// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.



// Parameters: two strings s1 & s2 of letters

// Return: the longest string of unique characters, sorted, from strings s1 and string s2



export const longest = (s1:string, s2:string): string => {
    // add s1 + s2, split an array, sort
    // new Set to find unique vals, spread into an array
    // join to a string
    return [...new Set ((s1+s2).split('').sort())].join('');
}


console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");