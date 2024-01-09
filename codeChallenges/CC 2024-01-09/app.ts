// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications



export const minValue = (values: number[]): number => {
    // spread unique digits from values into an array
    // sort least to greatest, join to string
    const strNum = [...new Set(values)].sort( (a,b) => a - b ).join('');

    return parseInt(strNum);
};