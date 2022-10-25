// Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null.

// Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null.



// Parameters: a integer, a string signifying a mathematical function, and an integer. The string may not always be a real mathematical function. Integers may be negative and zero

// Return: an integer signifying the result of the mathematical function on the two integers. If the string is invalid or you divide by zero return null

// Examples:
calculate(2,"+", 4); // 6
calculate(6,"-", 1.5); // 4.5
calculate(-4,"*", 8); // -32
calculate(49,"/", -7); // -7
calculate(8,"m", 2); // null
calculate(4,"/",0) // null



const calculate = ( num1, func, num2 ) => {
    // check the value of func and use that mathematical function to return result
    switch (func) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // if the function divides by zero, return null
            return num2 === 0 ? null : num1 / num2;
        default:
          return null;
    }
}