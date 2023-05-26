// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.



// Parameters: an array of all the same integer except one different integer

// Return: the different integer

// Examples:
findUniq([ 1, 0, 0 ]) // 1
findUniq([ 0, 1, 0 ]) // 1
findUniq([ 0, 0, 1 ]) // 1
findUniq([ 1, 1, 1, 2, 1, 1 ]) // 2
findUniq([ 1, 1, 2, 1, 1 ]) // 2
findUniq([ 3, 10, 3, 3, 3 ]) // 10



const findUniq = (arr) => {
    // create a new set from arr to find the two values
    const uniques = [... new Set(arr)];

    // if arr filtered for uniques[0] equals 1 return uniques[0], else return uniques[1]
    return arr.filter( (int) => int === uniques[0] ).length === 1
        ? uniques[0]
        : uniques[1];
}