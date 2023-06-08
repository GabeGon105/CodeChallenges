// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.



// Parameters: an array of strings and an integer k

// Return: the first longest string consisting of k consecutive strings taken in the argument array

// Examples:
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) // "abigailtheta"
longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) // "oocccffuucccjjjkkkjyyyeehh"
longestConsec([], 3) // ""
longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) // "wlwsasphmxxowiaxujylentrklctozmymu"



const longestConsec = ( arr, k ) => {
    // create a variable to hold the new array
    const newArr = [];

    // loop from 0 to arr.length - k
    for ( let i = 0 ; i <= arr.length - k ; i++ ) {
        // create a variable to hold the current string
        let str = ''

        // loop from i to i + k
        for ( let j = i ; j < i + k ; j++) {
            // add arr[j] to str
            str += arr[j];
        }

        // push str to newArr
        newArr.push(str);
    }

    // map through newArr, find the length of each str, sort from largest to smallest, assign to a variable
    const sortedArrLengths = newArr.map( ( str ) => str.length ).sort( (a, b) => b - a );

    // find the first value of newArr with a length of sortedArrLengths[0] or ''
    return newArr.find( (str) => str.length === sortedArrLengths[0] ) || '';
}