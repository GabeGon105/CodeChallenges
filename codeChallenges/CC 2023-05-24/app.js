// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).



// Parameters: an integer

// Return:

// Examples:
narcissistic(7) // true
narcissistic(153) // true
narcissistic(122) // false
narcissistic(487) // false



const narcissistic = (int) => {
    // convert integer to a string, split to an array by '', reduce through by adding each digit * int.length to the accumulator, then assign to a variable
    const sum = int.toString().split('').reduce( (acc, num) => acc += Math.pow(num,int.toString().length), 0 );

    // if int === sum return true, else return false
    return int === sum;
}