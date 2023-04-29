// You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

// Note: Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.



// Parameters: an integer n

// Return: a string pattern listing every number from n down to 1 on the first line, repeating the string minus the last digit on the next line, repeated all the way down to just n

// Examples:
pattern(1) // "1"
pattern(2) // "21\n2"
pattern(5) // "54321\n5432\n543\n54\n5"



const pattern = (n) => {
    // create a variable to hold the output string
    let output = '';

    // loop from 0 to n
    for ( let i = 0 ; i < n ; i++ ) {
        // loop from n down to i, add j to output
        for ( let j = n ; j > i ; j-- ) {
            output += j;
        }
        // add a line break to output
        output += '\n'
    }

    // slice the last '\n' from output then return
    return output.slice(0,-1)
}
