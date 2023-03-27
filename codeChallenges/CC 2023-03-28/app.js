// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.



// Parameters: a string of words and two integers i and n

// Return: the word in the i position of argument string repeated n times seperated by '-'

// Examples:
modifyMultiply("This is a string",3 ,5) // "string-string-string-string-string"
modifyMultiply("Creativity is the process of having original ideas that have value.",8 ,10) // "that-that-that-that-that-that-that-that-that-that"
modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",6 ,8) // "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance"
modifyMultiply("Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",2 ,5) // "around-around-around-around-around"



const modifyMultiply = ( string , i , n ) => {
    // split argument string to an array by ' ', find the word in position argument i plus '-', repeat n times, slice from index 0 to -1, then return
    return ( string.split(' ')[i] + '-').repeat(n).slice(0, -1);
}