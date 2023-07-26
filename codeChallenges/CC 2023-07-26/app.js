// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).

// Given n and firstNumber/first_number/first-number, find the number which is written in the radially opposite position to firstNumber.



// Parameters: an integer n representing number of points on a circle, and an integer representing the starting point

// Return: an integer representing the point opposite the second argument integer

// Examples:
circleOfNumbers(10,2) // 7
circleOfNumbers(10,7) // 2
circleOfNumbers(4,1) // 3
circleOfNumbers(6,3) // 0



const circleOfNumbers = (n,start) => {
    // divide n by 2, add this to start, then return the remainder after dividing this by n

    return ( n / 2 + start ) % n;
}