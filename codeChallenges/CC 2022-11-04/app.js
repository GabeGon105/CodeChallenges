// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.



// Parameters: always a string, first letter capital rest lowercase, may be less than 4 letters

// Return: if 3rd letter is a consonant return the first 3 letters, if the 3rd letter is a vowel return the first 4 letters, if the string is less than 4 characters return "Error: Name too short".

// Examples:
nicknameGenerator("Jimmy") // "Jim"
nicknameGenerator("Jeannie") // "Jean"
nicknameGenerator("Samantha") // "Sam"
nicknameGenerator("Sam") // "Error: Name too short"



const nicknameGenerator = ( name ) => {
    // if argument name is less than 4 letters, return "Error: Name too short"
    if ( name.length < 4 ) return "Error: Name too short"

    // if the 3rd letter is a consonant return the first 3 letters, else return the first 4 letters
    return 'aeiou'.indexOf(name[2]) === -1 ? name.slice(0, 3) : name.slice(0, 4);
}