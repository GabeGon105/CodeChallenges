// When provided with a String, capitalize all vowels. Y is not a vowel in this kata.



// Parameters: a string, may contain special characters, may be empty

// Return: the argument string with all vowels capitalized

// Examples:
doTest("") // ""
doTest("   @@@") // "   @@@"
doTest("HelloWorld!") // "HEllOWOrld!"
doTest("Sunday") // "SUndAy"
doTest("Codewars") // "COdEwArs"



const swap = (string) => {
    // replace all vowels with uppercase letters then return
    return string.replace(/[aeiou]/g, vowel => vowel.toUpperCase() )
}