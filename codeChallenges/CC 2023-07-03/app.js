// Our loose definition of Vampire Numbers can be described as follows:

// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the 
// # digits 6, 1, and 2 are present in both the product and multiplicands

// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product
// Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.



// Parameters: two integers

// Return: true or false whether or not all the digits in the argument integers are included in their product

// Examples:
vampire_test(21,6) // true
vampire_test(204,615) //true
vampire_test(30,-51) // true
vampire_test(-246,-510) // false
vampire_test(2947050,8469153) // true
vampire_test(2947051,8469153) // false



const vampire_test = (num1,num2) => {
    // convert each argument integer to a string, to an array, concat the two arrays together, sort, then assign to a variable
    const digits1 = num1.toString().split('').concat( num2.toString().split('') ).sort();

    // multiply num1 and num2, convert to a string, convert to an array, sort, then assign to a variable
    const digits2 = (num1*num2).toString().split('').sort();

    // return true if every value in digits1 and digits2 are equal, else return false
    return digits1.every( (digit,i) => digit === digits2[i] )
}