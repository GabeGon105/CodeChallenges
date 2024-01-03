// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13



export const mxdiflg = (a1:string[], a2:string[]): number => {
    // if a1 or a2 are empty, return -1
    if ( a1.length === 0 || a2.length === 0 ) return -1
    
    // map through a1, change each string to a number length
    const a1Lengths = a1.map( (str) => str.length )

    // repeat for a2
    const a2Lengths = a2.map( (str) => str.length )

    // subtract min of a1Lengths from max of a2Lengths
    // subtract min of a2Lengths from max of a1Lengths
    // return the greater of the two
    return Math.max(
        Math.max( ...a1Lengths ) - Math.min( ...a2Lengths ),
        Math.max( ...a2Lengths ) - Math.min( ...a1Lengths )
    )
}