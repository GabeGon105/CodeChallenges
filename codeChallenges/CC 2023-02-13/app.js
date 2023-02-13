// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.



// Parameters: an array of two strings each containing random characters separated by one ":"

// Return: an array of two strings in the same order as the argument string but with the characters after each ":" switched

// Examples:
tailSwap(['abc:123', 'cde:456']) //  ['abc:456', 'cde:123']
tailSwap(['a:12345', '777:xyz']) //  ['a:xyz', '777:12345']



const tailSwap = ( arrOfStrings ) => {
    // split arrOfStrings[0] and arrOfStrings[1] to arrays by ":"
    const arr1 = arrOfStrings[0].split(":");
    const arr2 = arrOfStrings[1].split(":");

    // add arr1[0] and ":" and arr2[1], add arr2[0] and ":" and arr1[1], then return as an array
    return [ `${arr1[0]}:${arr2[1]}` , `${arr2[0]}:${arr1[1]}` ];
}