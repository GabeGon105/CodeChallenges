// our task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

// More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.



// Parameters: a string of uppercase letters

// Return: the argument string with all letters replaced with their leetspeak equivalents

// Examples:
toLeetSpeak("LEET") // "1337"
toLeetSpeak("CODEWARS") // "(0D3W@R$"
toLeetSpeak("HELLO WORLD") // "#3110 W0R1D"
toLeetSpeak("LOREM IPSUM DOLOR SIT AMET") // "10R3M !P$UM D010R $!7 @M37"
toLeetSpeak("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG") // "7#3 QU!(K 8R0WN F0X JUMP$ 0V3R 7#3 1@2Y D06"



const toLeetSpeak = (str) => {
    // create dictionary to hold leetspeak conversions
    const leetSpeak = { A : '@', B : '8', C : '(', D : 'D', E : '3', F : 'F', G : '6', H : '#', I : '!', J : 'J', K : 'K', L : '1', M : 'M', N : 'N', O : '0', P : 'P', Q : 'Q', R : 'R', S : '$', T : '7', U : 'U', V : 'V', W : 'W', X : 'X', Y : 'Y', Z : '2' }

    // split str to an array by '', map through to replace every letter with its leetSpeak value, join the array to a string by '', then return
    return str.split('').map( (el) => leetSpeak[el] || ' ' ).join('');
}