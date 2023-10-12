// Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"



// Parameters: an odd integer between 0 and 1000000

// Return: a string consisting of two perfect square numbers seperated by '-' with a difference equal to the argument integer

// Examples:
// findSquares(9) // '25-16'
// findSquares(5) // '9-4'



export const findSquares = (num:number):string => {
    // take half of argument num rounded up and half of num rounded down, then assign to variables
    const greater: number = Math.round(num / 2);
    const lesser: number = Math.floor(num / 2);

    // return greater squared and lesser squared as a string seperated by '-'
    return `${greater**2}-${lesser**2}`;
};