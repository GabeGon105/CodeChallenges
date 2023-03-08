// You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings is "worth" more, and return it.

// A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

// In the event of a tie, you should return the first string, i.e. a.



// Parameters: two strings

// Return: find the ASCII code point value totals (each letter value summed) for each string and return whichever string has the highest total OR return the first string in the event of a tie

// Examples:
highestValue("AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567") // "KkLlMmNnOoPp4567"
highestValue("ABcd", "0123") // "ABcd"
highestValue("!\"?$%^&*()", "{}[]@~'#:;") // "{}[]@~'#:;"
highestValue("ABCD", "DCBA") // "ABCD"



const highestValue = ( string1, string2 ) => {
    // for each string, split to an array, loop through using reduce to find the total sum using .charCodeAt(0), then assign to a variable
    string1Sum = string1.split('').reduce( ( sum, char ) => sum += char.charCodeAt(0) , 0 );
    string2Sum = string2.split('').reduce( ( sum, char ) => sum += char.charCodeAt(0) , 0 );

    // if string2Sum is greater than string1Sum return string2, else return string1
    return string2Sum > string1Sum ? string2 : string1;
}