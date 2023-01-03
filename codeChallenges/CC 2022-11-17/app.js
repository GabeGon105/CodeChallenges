// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.



// Parameters: a string, letters and spaces, never empty

// Return: a string containing the first character of each word in the argument string

// Examples:
makeString("sees eyes xray yoat") //  "sexy"
makeString("brown eyes are nice") //  "bean"
makeString("cars are very nice") //  "cavn"



const makeString = (string) => {
    // split argument string by ' ', map through array returning only index 0 for each string, join by '', then return
    return string.split(' ').map( (word) => word[0] ).join('');
}