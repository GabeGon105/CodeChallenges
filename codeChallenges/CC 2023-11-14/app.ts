// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.



// Parameters: always a string, never empty

// Return: highest and lowest number as a string with a space between



export const highAndLow = (strNums:string): string => {
    // split argument strNums to array by ' '
    // map through to turn into numbers
    const arrNums: number[] = strNums.split(' ').map(Number)

    // spread arrNums into Math.max() and Math.min()
    // to find max and min, then return with space
    return `${Math.max(...arrNums)} ${Math.min(...arrNums)}`
}



console.log(highAndLow("1 2 3 4 5"), '5 1')
console.log(highAndLow("1 2 -3 4 5"), '5 -3')
console.log(highAndLow("1 9 3 4 -5"), '9 -5')