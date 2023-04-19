// Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.



// Parameters: a string

// Return: true if the argument string is a single ASCII letter, upper or lowerase, else return false

// Examples:
"".isLetter() // false
"a".isLetter() // true
"X".isLetter() // true
"7".isLetter() // false
"*".isLetter() // false
"ab".isLetter() // false
"a\n".isLetter() // false


String.prototype.isLetter = function () {
    // if the argument string has a length of 1 and includes a lower or uppercase letter return true, else return false
    return /^[a-zA-Z]$/.test(this)
}