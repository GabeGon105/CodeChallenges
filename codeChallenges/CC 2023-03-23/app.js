// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.



// Parameters: a string of letters and an array of integers

// Return: the argument string with capital letters in the indexes corresponding to the numbers in the argument array

// Examples:
capitalize("abcdef",[1,2,5]) // 'aBCdeF'
capitalize("abcdef",[1,2,5,100]) // 'aBCdeF'
capitalize("codewars",[1,3,5,50]) // 'cOdEwArs'
capitalize("abracadabra",[2,6,9,10]) //'abRacaDabRA'
capitalize("codewarriors",[5]) // 'codewArriors'
capitalize("indexinglessons",[0]) // 'Indexinglessons'



const capitalize = ( str, arr ) => {
    // split argument str to an array and assign to a variable
    const strArr = str.split('');

    // loop through strArr and if the current index is included in arr, return a capital letter, then join the arrray and return
    return strArr.map( ( letter, i ) => arr.includes(i) ? letter.toUpperCase() : letter ).join('');
}