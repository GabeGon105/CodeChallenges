// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.



// Paramters: three integers

// Return: true if exactly 2 of the argument integers are positive, else return false

// Examples:
twoArePositive(2, 4, -3) // true
twoArePositive(-4, 6, 8) // true
twoArePositive(4, -6, 9) // true
twoArePositive(4, 6, 0) // true
twoArePositive(-4, 6, 0) // false
twoArePositive(4, 6, 10) // false
twoArePositive(-14, -3, -4) // false



const twoArePositive = ( num1, num2, num3 ) => {
    // put all three arguments into an array, filter through the array for only positive numbers, find the length, then return true if it is equal to 2 else return false
    return [num1,num2,num3].filter( (num) => num > 0 ).length === 2;
}