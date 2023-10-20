// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.



// Parameters: a string of letters

// Return: an array containing all variations of the argument string by shifting the first letter to the end

// Examples:
scrollingText("codewars") // [ "CODEWARS", "ODEWARSC", "DEWARSCO", "EWARSCOD", "WARSCODE", "ARSCODEW" "RSCODEWA", "SCODEWAR" ]
scrollingText("abc") // ["ABC","BCA","CAB"]



const scrollingText = (string) => {
    // convert argument string to all uppercase, then save to a variable
    const uppercase = string.toUpperCase();

    // split uppercase to an array by '', map through to convert each letter to a variation of uppercase, then return the new array
    return uppercase.split('').map( (str, i) => {
        // combine uppercase starting from i and uppercase from index 0 to i, then return
        return uppercase.slice(i) + uppercase.slice(0,i);
    } )
}