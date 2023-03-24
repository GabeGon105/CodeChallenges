// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.



// Parameters: a string of letters and spaces

// Return: the argument string with alternating letter case

// Example:
spongeMeme("stop Making spongebob Memes!") // "StOp mAkInG SpOnGeBoB MeMeS!"



const spongeMeme = (str) => {
    // split string to an array by '', loop through the array to change each even indexed letter to capital and odd to lowercase, join to a string, then return
    return str.split('').map( ( letter, i ) => i % 2 !== 1 ? letter.toUpperCase() : letter.toLowerCase() ).join('');
}