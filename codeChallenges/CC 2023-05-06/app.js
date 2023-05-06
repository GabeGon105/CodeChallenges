// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.



// Parameters: an integer

// Return: a string "1 sheep...2 sheep... 3 sheep..." up to the argument integer

// Examples:
countSheep(0) // ""
countSheep(1) // "1 sheep..."
countSheep(2) // "1 sheep...2 sheep..."
countSheep(3) // "1 sheep...2 sheep...3 sheep..."



const countSheep = (num) => {
    let output = "";

    // loop from 1 to num, add i plus ' sheep...' to output for each i
    for ( let i = 1 ; i <= num ; i++ ) {
        output += `${i} sheep...`;
    }

    return output;
}