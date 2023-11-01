// You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).

// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

// The possible return strings are: "addition", "subtraction", "multiplication", "division".

// Example:
// calcType(1, 2, 3) -->   1 ? 2 = 3   --> "addition"
// Notes
// In case of division you should expect that the result of the operation is obtained by using / operator on the input values - no manual data type conversion or rounding should be performed.
// Cases with just one possible answers are generated.
// Only valid arguments will be passed to the function.
// Only valid arguments will be passed to the function!



// Parameters: two integers, and a third integer representing the result of a math operation between the first two values

// Return: a string representing which math operation was used

// Examples:
calcType(1,2,3) // 'addition'
calcType(10,4,40) // 'multiplication'
calcType(10,5,5) // 'subtraction'
calcType(9,5,1.8) // 'division'



const calcType = (num1,num2,result) => {
    // if num1+num2 equals result, return 'addition'
    if ( num1 + num2 === result ) return 'addition';

    // else if num1-num2 equals result, return 'subtraction'
    else if ( num1 - num2 === result ) return 'subtraction';

    // else if num1*num2 equals result, return 'multiplication'
    else if ( num1 * num2 === result ) return 'multiplication';

    // else if num1/num2 equals result, return 'division'
    else if ( num1 / num2 === result ) return 'division';
}