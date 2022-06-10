// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".



// Parameters: two numbers and a string indicating the arithmetic operator to use

// Return: an integer, the resultant integer after completing the arithmetic operation

// Examples:
arithmetic( 5, 2, "add" ) // 7
arithmetic( 5, 2, "subtract" ) // 3
arithmetic( 5, 2, "multiply" ) // 10
arithmetic( 5, 2, "divide" ) // 2.5



function arithmetic(a, b, operator){
    // if operator equals add, then add a and b and return
    if ( operator === 'add' ) {
      return a + b;
    }
    // if operator equals subtract, then minus b from a and return
    else if ( operator === 'subtract' ) {
      return a - b;
    }
    // if operator equals multiply, then multiply a and b and return
    else if ( operator === 'multiply' ) {
      return a * b;
    }
    // if operator equals divide, then divide b from a and return
    else if ( operator === 'divide' ) {
      return a / b;
    }
}
