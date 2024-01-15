// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.



export const isSortedAndHow = ( array: number[] ): string => {
    // check if every value is greater than the previous
    if (array.every( (num,i) => i === 0 || num >= array[i-1] )) return 'yes, ascending';

    // check if every value is less than the previous
    if (array.every( (num,i) => i === 0 || num <= array[i-1] )) return 'yes, descending';

    else return 'no';
}