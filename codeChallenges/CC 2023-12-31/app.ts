// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.



export const noOdds = (values: number[]): number[] => {
    // filter values for even numbers
    return values.filter( (num) => num % 2 === 0 );
}