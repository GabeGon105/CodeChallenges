// The trim() method removes whitespace from both sides of a string. w3schools

// In this kata we are going to extend the trim method to be able to remove any character(upper and lower cases) from both sides of a string.
// Task:
// Create a method called trim which removes the passed parameter c(upper and lower cases) from the leading and tailing of the string.

// Note:
// 1- If no parameter is being passed you need to remove the leading and tailing spaces.
// 2- The passed parameter will only be alphabet(upper and lower cases) characters.



// Parameters:

// Return:

// Examples:
"LLLHello Worldlll".trim("l") // "Hello World"
"   Hello World                 ".trim() // "Hello World"
"XVisca ElbarcaXX".trim("X") // "Visca Elbarca"



String.prototype.trim = (letter) => {
    // if no argument is passed, set argument letter to ' '
    if ( !letter ) letter = ' ';

    // use a RegExp constructor to replace all uppercase and lowercase of argument letter in the string, then return
    return this.replace(new RegExp(`^${letter}+|${letter}+$`, 'ig'), '');
}