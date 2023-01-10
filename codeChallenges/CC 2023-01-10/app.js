// Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

// We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

// its digit sum, s = 1 + 7 + 2 + 9 = 19
// reversing s = 91
// and 19 * 91 = 1729 --> the number that we started with.
// Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.



// Parameters: an integer

// Return: true or false depending if a positive integer n is Harshad number and the product of its digit sum and its digit sum reversed equals n

// Examples:
numberJoy(1997) // false
numberJoy(1998) // false
numberJoy(1729) // true



const numberJoy = num => {
    // convert argument num to a string, split to an array of strings, then reduce to find the sum of all individual digits
    const digitSum = ( num + '' ).split('').reduce( ( sum, num ) => sum += Number(num) , 0 );

    // if num equals digitSum multiplied by digitSum reversed return true, else return false
    return num === digitSum * Number( ( digitSum + '' ).split('').reverse().join('') );
}