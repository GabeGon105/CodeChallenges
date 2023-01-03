// Multiply a given number by eight if it is an even number and by nine otherwise.



// Parameter: an integer

// Return: an integer

// Examples:
simpleMultiplication(10) // 80
simpleMultiplication(5) // 45
simpleMultiplication(2) // 16



function simpleMultiplication(number) {
    // if parameter number is even return number multiplied by 8, else return number multiplied by 9
    return number % 2 === 0 ? number * 8 : number * 9;
}