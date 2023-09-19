// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):

// Note: There is no newline in the end (after the pattern ends)



// Parameters: an integer

// Return: the pattern specified above based on the argument integer

// Examples:
pattern(3) // "1\n1*2\n1**3")
pattern(7) // "1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7"



const pattern = (n) => {
    // create a variable to hold the output string, initialized as '1'
    let output = '1';

    // loop from 2 to n
    for ( let i = 2 ; i <= n ; i++ ) {
        // add '\n' plus '1' plus '*' a number of times equal to i-1 plus i to output
        output += `\n1${'*'.repeat(i-1)}${i.toString()}`;
    }

    return output;
}