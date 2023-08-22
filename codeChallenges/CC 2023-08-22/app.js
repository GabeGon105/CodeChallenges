// Complete the function word (string) and returns a string that spells the word using the NATO phonetic alphabet.

// There should be a space between each word in the returned string, and the first letter of each word should be capitalized.

// For those of you that don't want your fingers to bleed, this kata already has a dictionary typed out for you.



// Parameters: a string of letters

// Return: a string consisting of the NATO phonetic alphabet words representing each letter in the argument string

// Examples:
nato("hi") // "Hotel India"
nato("abc") // "Alpha Bravo Charlie"
nato("babble") // "Bravo Alpha Bravo Bravo Lima Echo"
nato("Banana") // "Bravo Alpha November Alpha November Alpha"



const nato = (word) => {
    // create a dictionary with each NATO letter-word pair
    const letters =  {
        "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
        "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
        "G": "Golf",   "H": "Hotel",   "I": "India",
        "J": "Juliett","K": "Kilo",    "L": "Lima",
        "M": "Mike",   "N": "November","O": "Oscar",
        "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
        "S": "Sierra", "T": "Tango",   "U": "Uniform",
        "V": "Victor", "W": "Whiskey", "X": "X-ray",
        "Y": "Yankee", "Z": "Zulu"
    }

    // set argument word to uppercase letters, split to an array by '', map through to replace each with its letter object value, join to a string by ' ', then return
    return word.toUpperCase().split('').map( (letter) => letters[letter] ).join(' ');
}