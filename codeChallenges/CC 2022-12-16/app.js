// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.



// Parameters: a string of numbers and 'plus' and 'minus', never empty

// Return: an integer if the string were evaluated

// Examples:
calculate("1plus2plus3plus4") // '10'
calculate('1minus2minus3minus4') // '-8'
calculate('1plus2plus3minus4') // '2'



const calculate = str => {
    // replace all 'plus' with '+' and replace all 'minus' with '-' in argument str, evaluate, convert to a string, then return
    return eval( str.replace(/plus/g, '+').replace(/minus/g, '-') ).toString();
}