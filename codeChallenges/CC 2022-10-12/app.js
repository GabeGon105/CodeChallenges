// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

// Task
// Given a number determine if it Automorphic or not .



// Parameters: an integer

// Return: 'Automorphic' or 'Not!!'

// Examples:
automorphic(1) // "Automorphic"
automorphic(3) // "Not!!"
automorphic(6) // "Automorphic"
automorphic(9) // "Not!!"



function automorphic(n){
    // if argument n squared as a string ends with argument n, return "Automorphic" else return "Not!!"
    return String( n * n ).endsWith( String(n) ) ? "Automorphic" : "Not!!" ;
}