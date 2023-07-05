// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.



// Parameters: two strings

// Return: a string consisting of all the characters from the argument strings that are unique between the two

// Examples:
solve("xyab","xzca") // "ybzc"
solve("xyabb","xzca") // "ybbzc"
solve("abcd","xyz") // "abcdxyz"
solve("xxx","xzca") // "zca"



const solve = (str1,str2) => {
    // create a variable to hold the output string
    let output = '';

    // convert str1 to an array, loop through, find characters in str1 that are not in str2 and add these to output
    str1.split('').forEach( (char) => !str2.includes(char) && ( output += char ) );

    // convert str2 to an array, loop through, find characters in str2 that are not in str1 and add these to output
    str2.split('').forEach( (char) => !str1.includes(char) && ( output += char ) );

    return output;
}