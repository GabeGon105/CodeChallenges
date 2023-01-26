// Let's build a calculator.

// The test expects you to provide a Calculator object with the following methods:

// Calculator.add()
// Calculator.subtract()
// Calculator.multiply()
// Calculator.divide()
// Each method expects two arguments, so for instance:

// Calculator.add(1,4) should return 5.

// Only integers are expected to be passed in as arguments, and the divide method should return 'false' when trying the divide by zero.



// Parameters: a method with 2 integer arguments

// Return: an integer

// Examples:
Calculator.add(1,4) //  5
Calculator.subtract(6,2) // 4
Calculator.multiply(3,4) // 12



const Calculator = {
    // add num1 and num2 then return
    add : function ( num1, num2 ) {
        return num1 + num2;
    },
    // subtract num2 from num1 then return
    subtract : function ( num1, num2 ) {
        return num1 - num2;
    },
    // multiply num1 and num2 then return
    multiply : function ( num1, num2 ) {
        return num1 * num2;
    },
    // if num2 is 0 return false, else return the result
    divide : function ( num1, num2 ) {
        return num2 === 0 ? false : num1 / num2;
    }
}