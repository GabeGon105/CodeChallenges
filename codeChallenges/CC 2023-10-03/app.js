// You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

// 0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
// 1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
// n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")



// Parameters: a string of elements seperated by ' '

// Return:
// 0 if the elements can form a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
// 1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
// n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")

// Examples:
findMissingNumber("1 2 3 5") // 4
findMissingNumber("1 3") // 2
findMissingNumber("1 5") // 2
findMissingNumber("") //  0
findMissingNumber("1 2 3 4 5") // 0
findMissingNumber("2 3 4 5") // 1



const findMissingNumber = (string) => {
    // if argument string is empty, return 0
    if (!string.length) return 0;
  
    // if argument string contains any non-numerical values return 1
    if (string.match(/[^\d ]/)) return 1;

    // split argument string to an array by ' ', sort least to greatest, then assign to a variable
    const sortedArr = string.split(' ').sort( (a,b) => a - b );

    // loop from 0 to sortedArr.length
    for ( let i = 0 ; i < sortedArr.length ; i++ ) {
        // if sortedArr[i] does not equal i + 1 return i
        if ( sortedArr[i] !== i + 1 + '' ) return i+1;
    }

    return 0;
}