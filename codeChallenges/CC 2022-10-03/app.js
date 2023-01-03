// Complete the function caffeineBuzz, which takes a non-zero integer as its argument.

// If the integer is divisible by 3, return the string "Java".

// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

// If one of the condition above is true and the integer is even, add "Script" to the end of the string.

// If none of the condition is true, return the string "mocha_missing!"



// Parameters: a non-zero integer

// Return: a string

// Examples:
caffeineBuzz(1) // "mocha_missing!"
caffeineBuzz(3) // "Java"
caffeineBuzz(6) // "JavaScript"
caffeineBuzz(12) // "CoffeeScript"



function caffeineBuzz(n) {
    // if argument n is divisible by both 3 and 4 and it is even, return "CoffeeScript"
    if ( n % 12 === 0 ) return "CoffeeScript";
    
    // if argument n is divisible by 3 and is even, return "JavaScript"
    if ( n % 6 === 0 ) return "JavaScript";
    
    // if argument n is divisible by 3, return "Java"
    if ( n % 3 === 0 )  return "Java";
    
    // if argument n misses all if statements, return "mocha_missing!"
    return "mocha_missing!";
}