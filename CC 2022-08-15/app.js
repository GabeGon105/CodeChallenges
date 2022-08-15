// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.



// Parameters: an integer

// Return: a multiline-string

// Example:
generateShape(3)
// +++
// +++
// +++



function generateShape(integer){
    // create a variable to hold the return shape
    let shape = 
    
    // create a single line of the shape by repeating string '+' argument integer times and a line break
    `${'+'.repeat(integer)}\n`
    
    // repeat this line argument integer times and trim white space at both ends
    .repeat(integer).trim();
    
    return shape;
}