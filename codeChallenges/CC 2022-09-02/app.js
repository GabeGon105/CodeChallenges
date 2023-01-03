// Create a method to see whether the string is ALL CAPS.

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.



// Parameters: a string

// Return: a boolean

// Examples: 
'C'.isUpperCase() // true
'hello I AM DONALD'.isUpperCase() // false
'HELLO I AM DONALD'.isUpperCase() // true



String.prototype.isUpperCase = function() {
    // convert this to all uppercase letters and assign to a variable
    let upperCase = this.toUpperCase();
    
    // if this converted to a string equals upperCase return true, else return false
    return this.toString() === upperCase;
}