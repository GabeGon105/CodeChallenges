// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.

// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn



// Parameters: an integer

// Return: integers and line breaks

// Examples:
pattern(5)
// 1
// 22
// 333
// 4444
// 55555

pattern(11)
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111



function pattern(n){  
    // create a variable to hold the pattern as an array
    let pattern = [];
    
    //loop from 1 to n
    for ( let i = 1 ; i <= n ; i++ ) {
      // push i as a string to pattern and repeat i times
      pattern.push( i.toString().repeat(i) );
    }
    
    // join pattern to a string joined by a line break
    return pattern.join('\n');
}