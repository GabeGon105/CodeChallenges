// You are given a string of n lines, each substring being n characters long. For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study the "horizontal" and the "vertical" scaling of this square of strings.

// A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

// Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
// A v-vertical scaling of a string consists of replicating v times each part of the squared string.

// Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
// Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

// Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".



// Parameters: a string and two integers

// Return: a string consisting of argument string with each letter repeated a number of times equal to the first argument integer, and the hold string repeated a number of times equal to the second argument string, with each string separated by \n

// Example:
const a = "abcd\nefgh\nijkl\nmnop";
scale(a, 2, 3) //"aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"



const scale = (string, horizontal, vertical) => {
    // if argument string is empty, return ''
    if ( string === '' ) return '';

    // split argument string to an array by '\n', map through to repeat each letter by horizontal and the whole string by vertical, join to a string by '\n', then return
    return string.split('\n').map( (str) => {
        // split str to an array by '', map through to repeat each letter by horizontal, join to a string, then assign to a variable
        const horizontalArr = str.split('').map( (el) => el.repeat(horizontal) ).join('');

        // create an array of length argument vertical filled with horizontalArr, join to a string by '\n\. then return
        return Array(vertical).fill(horizontalArr).join('\n');
    } )
    .join('\n');
}