// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

// Good luck!



// Parameters: an array of integers

// Return: square each even value, square roote each off value, find the sum rounded 2 decimal spots, then return

// Examples:
sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]) // 91.61
sumSquareEvenRootOdd([1,14,9,8,17,21]) // 272.71



const sumSquareEvenRootOdd = (array) => {
    // map through arugment array
    // square if even, square root if odd
    // reduce to find sum
    const sum = array
        .map( (num) => num % 2 === 0 ? num**2 : num**.5 )
        .reduce( (sum,num) => sum += num , 0 );

    // return sum rounded to 2 decimal spots
    return Math.round(sum*100) / 100;
}