// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:
// 'alpha beta gamma delta'



export const removeDuplicateWords = (s: string): string => {
    // split s to an array by ' '
    // create a new Set, spread into array
    // join to a string
    return [ ...new Set(s.split(' '))].join(' ');
}