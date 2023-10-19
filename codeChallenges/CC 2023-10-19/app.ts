// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.



// Parameters: a string of letters

// Return: an array of integers determined by the following the above rules

// Examples:
// parse("iiisdoso") // [ 8, 64 ]
// parse("iiisxxxdoso") // [ 8, 64 ]



export const parse = (string:string): number[] => {
    // create variables to hold the output array and the changing value
    const outputArr: number[] = [];
    let currentVal: number = 0;
    
    // convert argument string to an array, then loop through
    string.split('').forEach( (char:string) => {
        // if char equals 'i' add 1 to current
        if ( char === 'i' ) return currentVal++;
        // else if char equals 'd' subtract 1 from current
        else if ( char === 'd' ) return currentVal--;
        // else if char equals 's' square current
        else if ( char === 's' ) return currentVal **= 2;
        // else if char equals 'o' push current to outputArr
        else if ( char === 'o' ) outputArr.push(currentVal);
    }, 0 )

    return outputArr;
}