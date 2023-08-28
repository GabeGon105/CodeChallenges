// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.



// Parameters: a string and a string letter

// Return: an integer representing the index of the second occurence of the argument letter in the argument string, or -1

// Examples:
secondSymbol('Hello world!!!','l') // 3
secondSymbol('Hello world!!!', 'o') // 7
secondSymbol('Hello world!!!', 'A') // -1
secondSymbol('', 'q') // -1
secondSymbol('Hello', '!') // -1



const secondSymbol = (string, letter) => {
    // find the index of argument letter in argument string starting from 1 plus the index of the first occurence of letter in string
    return string.indexOf(letter, string.indexOf(letter) + 1);
}