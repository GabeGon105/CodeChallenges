// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.



// Parameters: an array of strings

// Return: an integer representing the total number of valid smile faces

// Examples:
countSmileys([]) // 0
countSmileys([':D',':~)',';~D',':)']) // 4
countSmileys([':)',':(',':D',':O',':;']) // 2
countSmileys([';]', ':[', ';*', ':$', ';-D']) // 1



const countSmileys = (arr) => {
    // list out all possible smileys
    const smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];

    // filter through argument arr for only strings included in smileys, then return the length
    return arr.filter( (str) => smileys.includes(str) ).length;
}